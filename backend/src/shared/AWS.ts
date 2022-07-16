import S3 from "aws-sdk/clients/s3";

class AWS {
  public bucketName = process.env.AWS_BUCKET_NAME;
  public region = process.env.AWS_REGION;
  public s3: S3;
  private accessKeyId = process.env.AWS_ACCESS_KEY;
  private secretAccessKey = process.env.AWS_SECRET_KEY;

  constructor() {
    this.s3 = new S3({
      region: this.region,
      accessKeyId: this.accessKeyId,
      secretAccessKey: this.secretAccessKey,
    });
  }
}

export default AWS;
