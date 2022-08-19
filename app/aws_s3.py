import boto3
import botocore
import os
import uuid

BUCKET_NAME = os.environ.get("BUCKET_NAME")
S3_LOCATION = f"https://{BUCKET_NAME}.s3.amazonaws.com/"
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg"}

s3 = boto3.client(
   "s3",
   aws_access_key_id=os.environ.get("ACCESS_KEY_S3"),
   aws_secret_access_key=os.environ.get("SECRET_ACCESS_KEY_S3"),
#    aws_session_token=os.environ.get('AWS_SESSION')
)


def allowed_file(filename):
    return "." in filename and \
           filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


def get_unique_filename(filename):
    ext = filename.rsplit(".", 1)[1].lower()
    unique_filename = uuid.uuid4().hex
    return f"{unique_filename}.{ext}"


def upload_to_s3(file, acl="public-read"):
    try:
        s3.upload_fileobj(
            file,
            BUCKET_NAME,
            file.filename,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )
    except Exception as e:
        # in case the our s3 upload fails
        return {"errors": str(e)}

    return {"url": f"{S3_LOCATION}{file.filename}"}
