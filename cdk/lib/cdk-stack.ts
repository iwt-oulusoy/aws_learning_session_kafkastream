import {aws_dynamodb as dynamodb, Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {BillingMode} from "aws-cdk-lib/aws-dynamodb";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const producerTable = new dynamodb.Table(this, 'producerDB', {
      tableName: 'producer_db',
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST
    });

  }
}
