const questions = [
    {
        "question": "Which AWS service should you use to gain operational insights of your resources ?",
        "choices": ["A. Amazon RDS", "B. Amazon DynamoDB", "C. Amazon CloudWatch", "D. Amazon S3"],
        "answer": "C. Amazon CloudWatch",
        "explanation": "Amazon CloudWatch is a service that gives you actionable insight to monitor your applications, respond to system-wide performance changes, optimize resource utilization and get a unified view of operational health"
    },
    {
        "question": "In the context of AWS, which among the following disaster recovery approaches is the most cost-effective but can tolerate a few hours of data loss ?",
        "choices": ["A. Warm Standby", "B. Backup and Restore", "C. Multi-site active/active", "D. Pilot Light"],
        "answer": "B. Backup and Restore",
        "explanation": "Backup and Restore approach is the most cost-effective disaster recovery strategy. However this strategy can tolerate a few hours of data loss because it takes time to restore data from backups. On the other hand, the Pilot Light, Warm Standby, and Active/Active stratgies have lower RTO and RPOS."
    },
    {
        "question": "What is one of the main uses of Amazon Rekognition ?",
        "choices": ["A. Detecting, Analyzing and comparing faces", "B. Translating text into different languages", "C. Comparing DNA sequences", "D. Converting videos to 3D models"],
        "answer": "A. Detecting, Analyzing and comparing faces",
        "explanation": "Amazon Rekongition is a service that makes it easy to add image and video analysis to your applications. Its is particularly adept at detecting, analyzing and comparing faces."
    },
    {
        "question": "What is the purpose of the RSS feed feature offered by the AWS Health Dashboard - Service Health",
        "choices": ["A. To get notfications of AWS service interruptions", "B. To get notifications of AWS service upgrades", "C. To get updates of AWS pricing changes", "D. To get news of AWS upcoming events"],
        "answer": "A. To get notfications of AWS service interruptions",
        "explanation": "Provide an RSS feed feature which users can subscribe in order to be notified of any service interruptions"
    },
    {
        "question": "Which AWS service allows you to host a dynamic website and manage server-side scripts ?",
        "choices": ["A. Amazon Route 53", "B. Amazon QuickSight", "C. Amazon S3", "D. Amazon EC2"],
        "answer": "D. Amazon EC2",
        "explanation": "Amazon EC2 allows you to run applications on virtual servers. You have complete control over your computing resources and can run and amanage server-side scripts. Amazon S3 is used for Static websties. Amazon EC2 is used for dynamic"
    },
    {
        "question": "Which AWS Pricing Model allows users to bid on unused AWS resources",
        "choices": ["A. Spot Instances", "B. Dedicated Hosts", "C. Reserved Instances", "D. On-Demand Instances"],
        "answer": "A. Spot Instances",
        "explanation": "AWS Spot Instances allow users to bid on unused EC2 capacity in the AWS cloud. THey are available up to a 90% discount compared to On-demand."
    },
    {
        "question": "What would be the most cost-effective option for storing infrequently accessed data in AWS cloud ?",
        "choices": ["A.Amazon S3 Standard", "B. Amazon EBS", "C. Amazon S3 Glacier", "D. Amazon EC2 Instance store"],
        "answer": "C. Amazon S3 Glacier",
        "explanation": "For infrequently accessed data, Amazon S3 Glacier is the most cost-effective storage options"
    },
    {
        "question": "A business intends to use a NoSQL database for its CRM application. What is the best AWS service for this purpose ?",
        "choices": ["A. Amazon RDS", "B. Amazon Redshift", "C. Amazon SQS", "D. Amazon DynamoDB"],
        "answer": "D. Amazon DynamoDB",
        "explanation": "Amazon DynamoDB is the only NoSQL database option here. RDS is a SQL database. Redshift is a data warehousing service and SQS is a message queuing service for reliably communicating between software componenets"
    },
    {
        "question": "Which AWS service provides data encryption at rest as a default feature",
        "choices": ["A. Amazon EC2", "B. Amazon EBS", "C. Amazon S3", "D. Amazon RDS"],
        "answer": "C. Amazon S3",
        "explanation": "Amazon S3 provides data encryption at rest by default."
    },
    {
        "question": "Which AWS service allows you to rent virtual computers on which you can run your own computer applications ?",
        "choices": ["A. Amazon Route 53", "B. Amazon RDS", "C. Amazon S3", "D. Amazon EC2"],
        "answer": "D. Amazon EC2",
        "explanation": "EC2 is a web service that provides resizeable compute capacity in the cloud. Can be used to host dynamic websties that use server side scripts"
    },
    {
        "question": "In what scenario would it be more cost-effective to use S3 Standard-Infrequent Access over S3 Glacier",
        "choices": ["A. When you expect to access the data sometimes but not frequently", "B. When the data will be frequently", "C. When the data will never be accessed", "D. When you want the highest possible durability"],
        "answer": "A. When you expect to access the data sometimes but not frequently",
        "explanation": "S3 Standard-IA is designed for data that is accessed less frequently, but requires rapid access when needed"
    },
    {
        "question": "What is the main purpose of AWS Artifact ?",
        "choices": ["A. To generate security assessment report for AWS services", "B. To provide training materials for AWS services", "C. To provide on-demand access to AWS' security and compliance reports", "D. To store configuration details for all AWS resources"],
        "answer": "C. To provide on-demand access to AWS' security and compliance reports",
        "explanation": "AWS Artifact is a web service that provides on-demand access to AWS' security and compliance reports and select online agreements"
    },
    {
        "question": "Which service would you use in AWS to route user traffic to multiple registered tragets in one or more Availability Zones",
        "choices": ["A. Elastic Load Balancing", "B. AWS Global Accelerator", "C. Amazon Route 53", "D. Amazon CloudFront"],
        "answer": "A. Elastic Load Balancing",
        "explanation": "Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instacnes, containers, and IP addresses"
    },
    {
        "question": "Which AWS service allows developers to model and provision AWS and third-party applications resources ?",
        "choices": ["A. AWS CodeBuild", "B. AWS CodeDeploy", "C. AWS Cloud Development Kit", "D. AWS Lambda"],
        "answer": "C. AWS Cloud Development Kit",
        "explanation": "he Cloud Development Kit is used to model and provision AWS AND third-party applications"
    },
    {
        "question": "Which of the following AWS services provides insights into your spending and helps manage your costs to meet your budget objective",
        "choices": ["A. Amazon CloudWatch", "B. AWS Organizations", "C. AWS CloudTrail", "D. AWS Cost Explorer"],
        "answer": "D. AWS Cost Explorer",
        "explanation": ""
    },
    {
        "question": "Under the AWS shared responsilbity model, which aspect is the customer NOT responsible for ?",
        "choices": ["A. Data encryption at rest", "B. Patching of EC2 instances", "C. Physical Security of AWS Data Centers", "D. Security Group configuration"],
        "answer": "C. Physical Security of AWS Data Centers",
        "explanation": "Physical security of the AWS data centers is the responsiblity of AWS to secure"
    },
    {
        "question": "What does the AWS total cost of Ownership (TC) Calcualtor NOT provide ?",
        "choices": ["A. Detailed set reports for executive presetnations", "B. Estimation of cost savings when moving to AWS", "C. Breakdown of operational hours for resources on AWS", "D. Cost comparison between AWS and on-premises enviroment"],
        "answer": "C. Breakdown of operational hours for resources on AWS",
        "explanation": "TCO Calculator does not provide a breakdown of operational hours fopr resources on AWS"
    },
    {
        "question": "In AWS Route 53, which routing policy should be used to distribute traffic evenly among resources ?",
        "choices": ["A. Failover Routing", "B. Latency-based Routing", "C. Weighted Routing", "D. Simple Routing"],
        "answer": "C. Weighted Routing",
        "explanation": "Weighted Routing in AWS Route 53 allows you to split your traffic based on different weights assigned."
    },
    {
        "question": "What service does AWS Inspector provide in relation to EC2 instances",
        "choices": ["A. Automated security assessment", "B. Data encryption", "C. Instance sacling", "D. Storage Management"],
        "answer": "A. Automated security assessment",
        "explanation": "AWS Inspector is an automated security assessment service that improves the security and compliance of applications."
    },
    {
        "question": "Which Amazon service can be used to reduce latency by offering data processing and storage capabilities close to the end users on a global scale without housing the entire AWS infrastructure ?",
        "choices": ["A. AWS Local Zones", "B. AWS Outposts", "C. AWS Snow Family", "D. AWS Edge Location"],
        "answer": "D. AWS Edge Location",
        "explanation": "AWS Edge Locations are sites deployed in major cities and highly populated areas across the globe, seperated from AWS Regions and Availiability Zones. They are primarily used by Amazon's CloudFront content delivery network to cache data and reduce latency for end user access."
    },
    {
        "question": "Which AWS service provides capabilities to automatically increase or decrease your resource capcaity according to conditions you define, assitising right-sizing your resources ?",
        "choices": ["A. AWS Auto Scaling", "B. AWS Glue", "C. AWS Lambda", "D. Amazon Quicksight"],
        "answer": "A. AWS Auto Scaling",
        "explanation": "Auto scaling monitors your applications and automatically adjusts capcaity to maintain steady, predictable performance at the lowest possible cost."
    },
    {
        "question": "Which service provides automatic scaling of your Amazon EC2 enviroment in response to changing traffic pattern",
        "choices": ["A. Amazon EC2 Auto Scaling", "B. Amazon VPC", "C. AWS CloudFormation", "D. Amazon Route 53"],
        "answer": "A. Amazon EC2 Auto Scaling",
        "explanation": "Amazon EC2 Auto Scaling is the service that automatically adjusts capcaity to maintain steady, predictable performance at the lowest possible cost."
    },
    {
        "question": "What is AWS's responsibility under the Shared Responsibility Model when pushing VPC flow logs to Amazon S3",
        "choices": ["A. Maintaining data accuracy within S3 bucket", "B. Managing the operating system updates on the S3 bucket", "C. Implementing bucket policies for the customer", "D. Ensuring the physical infrastructure running the S3 bucket"],
        "answer": "D. Ensuring the physical infrastructure running the S3 bucket",
        "explanation": "Under AWS Shared Responsibility Model, AWS is reponsible for protecting the underlying infrastructure that underlies to launch AWS cloud services, whcih includes ensuring the physical infrastructure running the S3 bucket"
    },
    {
        "question": "Which IAM feature in AWS allows web application developers to delegate permissions to AWS resources without sharing long-term security credentials ?",
        "choices": ["A. User-based access", "B. Role-based access", "C. Authorization-based access", "D. Group-based access"],
        "answer": "B. Role-based access",
        "explanation": "Role-based access is a feature provided by IAM in AWS, where permissions to access AWS resources can be delegated to entities in the AWS account without sharing long-term security credentials."
    },
    {
        "question": "Which of the following AWS services is a primarily used for auditing activites in your Amazon Elastic Compute Cloud (Amazon EC2) and other AWS services ? ",
        "choices": ["A. AWS CloudWatch Logs", "B. AWS CloudTrail", "C. AWS OpsWorks", "D. Amazon Kinesis"],
        "answer": "B. AWS CloudTrail",
        "explanation": "AWS CloudTrail is primarily used for auditing activites as it enables governance, compliance, operational auditing and risk auditing of your AWS account."
    },
    {
        "question": "Which type of Cloud deployment model allows a company to implement cloud services within their internal IT infrastructure ?",
        "choices": ["A. Hybrid Cloud", "B. Multi Cloud", "C. Public Cloud", "D. Private Cloud"],
        "answer": "D. Private Cloud",
        "explanation": "In a Private Cloud deployment model, IT services are rendered over a network that is internal to the company. This means that the company hosts everything on its own IT infracstructure."
    },
    {
        "question": "Which AWS services is the most suitable for transferring extremely large volumes of data, up to Exabyte scale, from on-premises data center to the AWS cloud? ",
        "choices": ["A. AWS Snowmobile", "B. AWS Storage Gateway", "C. AWS Snowball", "D. AWS Snowball Edge"],
        "answer": "A. AWS Snowmobile",
        "explanation": "AWS Snowmobile is a data transfer service that moves extremely large amounts of data to AWS. "
    },
    {
        "question": "An application needs to be deployed quickly with minimal configuration and management on AWS, which of the following AWS services should be used ?",
        "choices": ["A. Amazon RDS", "B. Amazon S3", "C. AWS Elastic Beanstalk", "D. AWS Glue"],
        "answer": "C. AWS Elastic Beanstalk",
        "explanation": "AWS Elatsic Beanstalk is an easy-to-use service for deploying and scaling web applications with minimal configuration."
    },
    {
        "question": "Where can on monitor AWS service interruptions in real time ?",
        "choices": ["A. Amazon CloudWatch", "B. AWS CloudFormation", "C. Amazon EC2 Dashboard", "D. AWS Health Dashboard - Service Health"],
        "answer": "D. AWS Health Dashboard - Service Health",
        "explanation": "D. AWS Health Dashboard - Service Health gives you a real-time overview of service interruptions across all AWS services."
    },
    {
        "question": "A company stores data files in an Amazon S3 bucket and wants to distribute these files to users around the world. Which service should the company use ?",
        "choices": ["A. Amazon EC2", "B. AWS Elastic Beanstalk", "C. Amazon Redshift", "D. Amazon CloudFront"],
        "answer": "D. Amazon CloudFront",
        "explanation": "Amazon CloudFront is a fast content delivery network service that securely delivers data, videos and applications to customers globally"
    },
    {
        "question": "What term is utilized by AWS S3 to organize and manage objects inside a bucket ?",
        "choices": ["A. Folder", "B. Module", "C. Document", "D. File"],
        "answer": "A. Folder",
        "explanation": "Inside a bucket on Amazon S3, the term 'Folder' is used to organize and manage objects. "
    },
    {
        "question": "Which AWS service provides a tunneling option for AWS Identity and Access Management (IAM) users to establish an SSH connection to Amazon EC2 instances without using an SSH key pair ?",
        "choices": ["A. AWS Secrets Manager", "B. Amazon Inspector", "C. Amazon Connect", "D. AWS System Manager Session Manager"],
        "answer": "D. AWS System Manager Session Manager",
        "explanation": "AWS System Manager Session Manager provides a secure and browser-based interactive shell experience for EC2 instances, without need to open any inbound ports or use SSH key pairs."
    },
    {
        "question": "What is the best method to ensure your applications stays up and running if a single data ceneter fails ?",
        "choices": ["A. Deploy your application across mulitple regions", "B. Deploy your application across mulitple VPCS", "C. Deploy your application across multiple Availability Zones", "D. Deploy your applications across multiple subnets"],
        "answer": "C. Deploy your application across multiple Availability Zones",
        "explanation": "Using mulitple AZs is the best method to ensure high availability of your application"
    },
    {
        "question": "What functions does AWS CloudTrail mainly serve?",
        "choices": ["A. Automated Security Assesment", "B. Governance, Compliance, Operational Auditing, Risk Auditing of your AWS account", "C. Performance Monitoring", "D. Directory services AWS and connecting to directory services on-presmises"],
        "answer": "B. Governance, Compliance, Operational Auditing, Risk Auditing of your AWS account",
        "explanation": "AWS CloudTrail is service that primarily enables Governance, Compliance, Operational Auditing, Risk Auditing of your AWS account"
    },
    {
        "question": "Which of the following is not a key function of AWS Identity Management (IAM) ?",
        "choices": ["A.The ability to host web applications", "B. Managing AWS API requests permissions", "C. Sharing access to your AWS account", "D. Managing users"],
        "answer": "A.The ability to host web applications",
        "explanation": "IAM is a web service that helps you securely control access to AWS resources for your users."
    },
    {
        "question": "Which Amazon EC2 pricing model is best suitable for application with steady usage ?",
        "choices": ["A. Reserved Instances", "B. Spot Instances", "C. On-demand Instances", "D. Dedicated Hosts"],
        "answer": "A. Reserved Instances",
        "explanation": "Reserved Instances is a pricing model that provides you with siginificant savings on your Amazon EC2 costs compared to On-Demand Instance pricing."
    },
    {
        "question": "Which of the following AWS support plans is the most cost-effective for a small organization ?",
        "choices": ["A. AWS Developer Support", "B. AWS Enterprise", "C. AWS Basic Support", "D. AWS Business Support"],
        "answer": "D. AWS Business Support",
        "explanation": "AWS Business Support is considered the most cost-effective for small organizations as it provides 24/7 support"
    },
    {
        "question": "What is the most effective method to transfer data from corporate data center's NFS file system to AWS Cloud ?",
        "choices": ["A. Amazon S3 Transfer Acceleration", "B. AWS Snowball", "C. AWS Transfer for SFTP", "D. AWS DataSync"],
        "answer": "D. AWS DataSync",
        "explanation": "AWS DataSync is a service that makes it simple and fast to move large amounts of data online between on premises storage and Amazon S3."
    },
    {
        "question": "What is the primary role of the AWS CloudFormation service ?",
        "choices": ["A. Automating the setup and provisioning of AWS infrastructure", "B. Performance monitoring for AWS services", "C. Executing commands from on-premise servers to AWS", "D. Managing the deployment of applications"],
        "answer": "A. Automating the setup and provisioning of AWS infrastructure",
        "explanation": "AWS CloudFormation is a service that helps you model and set up your Amazon Web Services resoruces so you can spend less time managing those resources and mor etime focusing on your applications"
    },
    {
        "question": "What is one of the underlying prinicples of the AWS Well-Architected Framework",
        "choices": ["A. Designing systems to deliver business value", "B. Intergrating only with AWS tools and services", "C. Focusing solely on cost optimization", "D. Programming in mulitple programming languages"],
        "answer": "A. Designing systems to deliver business value",
        "explanation": "The AWS Well-Architected Framework is designed to help cloud architects build secure, high-performing,resilent and efficent applications and services."
    },
    {
        "question": "Which AWS service would be the best to use uf a user requires a secure connection between their AWS VPC and another private network",
        "choices": ["A. AWS Direct Connect", "B. Amazon VPC", "C. AWS Snowball", "D. AWS Site-to-Site VPN"],
        "answer": "D. AWS Site-to-Site VPN",
        "explanation": "AWS Site-to-Site VPN creates a secure, dedicated connection between your network and one of the AWS private network"
    },
    {
        "question": "What is the purpose of using AWS Audit Manager in terms of compliance and risk assessments",
        "choices": ["A. It helps to provide  on-demand access to AWS' security and compliance reports and select online agreements", "B. It helps to continously audit your AWS usage to assess risk and compliance with regulations and industry standards", "C. It provides best practice recommendations to help you follow AWS architectual guidance", "D. It assits in evaluating and auditing confugurations of AWS resources, focusing on resource inventory and change management"],
        "answer": "B. It helps to continously audit your AWS usage to assess risk and compliance with regulations and industry standards",
        "explanation": "AWS Audit Manager assits organizations in continously auditing their AWS usuage"
    },
    {
        "question": "What is Cloud Computing in AWS",
        "choices": ["A. A technology that requires you to maintain physical data centers", "B. The on-demand delivery of IT resources over the Internet with pay-as-you-go pricing", "C. A cloud service that comes with an up-front payment model", "D. A technology that manages physical servers"],
        "answer": "B. The on-demand delivery of IT resources over the Internet with pay-as-you-go pricing",
        "explanation": "Cloud Computing in AWS is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing"
    },
    {
        "question": "In AWS, how does the principle of 'variable expenses' aids in cost efficiency",
        "choices": ["A. You only pay for storage and bandwidth, regardless of the resources used", "B. You have to pay for long-term contracts that offer limited resources and services", "C. You have to incure a high upfront cost before starting to use the services", "D. You only pay for the compute power, storage and other resources you use, with no long-term contacts or upfront costs"],
        "answer": "D. You only pay for the compute power, storage and other resources you use, with no long-term contacts or upfront costs",
        "explanation": "The concept of 'variable expenses' in Cloud Computing enables users to benefit from the pay-as-you-go model."
    },
    {
        "question": "Which of the following is a siginificant benefit of economies of scale in cloud computing ?",
        "choices": ["A. Reduced costs due to resource-sharing and infrastructure", "B. Decreased security due to shared-access models", "C. Lower availbility due to increased user demand", "D. Increased price due to peak loud management"],
        "answer": "A. Reduced costs due to resource-sharing and infrastructure",
        "explanation": "Economies of sclae is a significant benefit of cloud computing. As many users are sharing the resources and infrastructure the costs get reduced."
    },
    {
        "question": "What is the main difference between IAM and AWS Organizations",
        "choices": ["A. Both are used for managing polices at the resource level within an account", "B. AWS IAM deals with access at the resource level within an account, while AWS Organizations manage polices across multiple AWS Accounts", "C. AWS Organization manage policies at the resource level while IAM deals with the access within an account", "D. AWS IAM is used for multi-account management while AWS Organizations is used for single account management"],
        "answer": "B. AWS IAM deals with access at the resource level within an account, while AWS Organizations manage polices across multiple AWS Accounts",
        "explanation": "AWS IAM and AWS Organizations are two different services for different scales of resource and access management"
    },
    {
        "question": "Which AWS tool provides the functionality to set custom budgets to track your cost and usage from the simplest to the most complex use cases ?",
        "choices": ["A. Amazon Inspector", "B. AWS Budgets", "C. AWS Model Builder", "D. AWS Cost Explorer"],
        "answer": "B. AWS Budgets",
        "explanation": "AWS Budgets gives you the ability to set custom cost and usage budgets that alert you when your costs or usage exceed your budgeted amount."
    },
    {
        "question": "What is the method to reduce the cost of Amazon EC2 Instances ?",
        "choices": ["A. Select and use appropraite instance types according to the need", "B. Increase teh number of instances irrespective of usage", "C. Use only On-Demand instances", "D. Always use the latest instance type irrespective of need"],
        "answer": "A. Select and use appropraite instance types according to the need",
        "explanation": "To reduce the cost of Amazon EC2 instances, a user can select and use appropriate instances types according to the need."
    },
    {
        "question": "In the AWS Well-Architected Framework, which pillar emphasizes on choosing the most suitable resource types?",
        "choices": ["A. Perfromance Efficiency", "B. Operational Excellence", "C. Reliability", "D. Cost Optimiaztion"],
        "answer": "A. Perfromance Efficiency",
        "explanation": "A. Perfromance Efficiency emphasized on using IT and computing resources efficiently"
    },
    {
        "question": "What function does the EC2 Auto Scaling serve in an AWS enviroment ?",
        "choices": ["A. It ensures high availiability", "B. It automatically adjusts compute capacity based on demand", "C. It manages load balancing between instances", "D. It gurantees fault tolerance for all applications"],
        "answer": "B. It automatically adjusts compute capacity based on demand",
        "explanation": "Amazon EC2 Auto Scaling automatically adjusts compute capacity up or down according to set conditions."
    },
    {
        "question": "Which AWS service allows you to collect, process, and analyze real-time, streaming data ?",
        "choices": ["A. Amazon Redshift", "B. Amazon Glacier", "C. Amazon Kinesis", "D. Amazon S3"],
        "answer": "C. Amazon Kinesis",
        "explanation": "Amazon Kinesis makes it easy to collect, process and analyze real-time, streaming data so you can ghet timely insights and react quickly to new information"
    },
    {
        "question": "Which Amazon Web Service can provide a browser-based client for connecting to EC2 instances ?",
        "choices": ["A.Amazon CloudFront", "B. Amazon EC2 Instance Connect", "C. Amazon S3", "D. AWS Fargate"],
        "answer": "B. Amazon EC2 Instance Connect",
        "explanation": "Amazon EC2 Instance Connect provides a simple,secure, and scalable way to connect to your EC2 instances using a browser-based client."
    },
    {
        "question": "Which AWS service helps in identifying the resources in your organizations and accounts, such as Amazon S3 buckets or IAM roles, that are shred with an external entity ?",
        "choices": ["A. AWS IAM Access Analyzer", "B. AWS Elastic Beanstalk", "C. AWS CodeStar", "D. AWS App Runner"],
        "answer": "A. AWS IAM Access Analyzer",
        "explanation": "AWS IAM Access Analyzer helps in identifying the resources in your organizations and accounts like Amazon S3 buckets or IAM roles."
    },
    {
        "question": "A digital publishing company is developping a platform where users can upload thier audio books. They want to convert the speech in these audio files to text for data analysis and use text-to-speech tech to create samples of books. As a Cloud Ptactitioner, which AWS services would you recommend ?",
        "choices": ["A. Use Amazon Polly to convert speech to text for data analysis. Then use Amazon Transcribe to create audio samples of the books", "B. Use Amazon Polly to convert speech to text for data analysis. Then use Amazon Translate to create audio samples of the books", "C. Use Amazon Transcribe to convert speech to text for data analysis. Then uses Amazon Polly to create audio samples of the books", "D. Use Amazon Translate to convert speech to text for data analysis. Then use Amazon Transcribe to create audio samples of the books"],
        "answer": "C. Use Amazon Transcribe to convert speech to text for data analysis. Then uses Amazon Polly to create audio samples of the books",
        "explanation": "Amazon Transcribe can be used to convert speech to aduio. Amazon polly can covert speech to text"
    },

    {
        "question": "Which S3 storage class provides extremely low cost,secure, and durable storage solution for long term data archiving ?",
        "choices": ["A. Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)", "B. Amazon S3 Intelligent-Tiering", "C. Amazon S3 Standard", "D. Amazon S3 Glacier Flexible Retrieval"],
        "answer": "D. Amazon S3 Glacier Flexible Retrieval",
        "explanation": "Amazon S3 Glacier Flexible Retrieval is designed to deliver durability and provides comprehensive security for data archiving and long-term backup."
    },
    {
        "question": "Which AWS service allows for data warehousing and SQL query execution on structured and semi-structured data ?",
        "choices": ["A. Amazon Redshift", "B. Amazon DynamoDB", "C. AWS Glue", "D. Amazon S3"],
        "answer": "A. Amazon Redshift",
        "explanation": "Amazon Redshift is a fully managed data warehouse service in the cloud"
    },
    {
        "question": "Under the AWS Shared Responsibility Model, who is responsible for patching and fixing flaws within a customer's AWS EC2 instances? ",
        "choices": ["A. Automatic AWS updates", "B. Third-Party maintencance services", "C. The Customer", "D. Amazon Web Services"],
        "answer": "C. The Customer",
        "explanation": "Under the Shared Resposibility Model, AWS is reponsible for the security 'of' the cloud while customers are responsible for security in the cloud "
    },
    {
        "question": "What is the method to reduce the cost of the Amazon EC2 instances ?",
        "choices": ["A. Select and use apporpraite instance types according to the need", "B. Always use teh lastest instancen type", "C. Increase the number of instances irrepective of usage", "D. Use only On-Demand instances"],
        "answer": "A. Select and use apporpraite instance types according to the need",
        "explanation": "To reduce the cost of Amazon EC2 instances, a user can select and use appropriate instance types according to the need"
    },
    {
        "question": "Which AWS service enables you to visualize, understand , and manage your AWS costs and usage over time? ",
        "choices": ["A. AWS Cost Explorer", "B. AWS Compute Optimizer", "C. AWS Trusted Advisor", "D. AWS Budgets"],
        "answer": "A. AWS Cost Explorer",
        "explanation": "AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand and manage AWS Costs and usage over time"
    },
    {
        "question": "Which API provides AWS Business Support customers with detailed information about events that affect their AWS services and resources?",
        "choices": ["A. AWS CloudTrail API", "B. AWS KMS API", "C. AWS Cognitio API", "D. AWS Health API"],
        "answer": "D. AWS Health API",
        "explanation": "The AWS Health API is designed to provide AWS Business Support customers with detailed information about events that could potentially discrupt thier AWS services"
    },
    {
        "question": "Which AWS service should a company use to establish a private network connection between their on-premise network and multiple VPCs in different regions",
        "choices": ["A. AWS Direct Connect Gateway", "B. Inter-Region VPC Peering", "C. AWS Managed VPN", "D. Amazon CloudFront"],
        "answer": "A. AWS Direct Connect Gateway",
        "explanation": "AWS Direct Connect Gateway should be used to connect from your on-premise network to one or more VPCs in different AWS regions"
    },
    {
        "question": "Which AWS service would be the best choice for a company that needs to centrally manage multiple AWS accounts and their resources ?",
        "choices": ["A. AWS Organizations", "B. Amazon Redshift", "C. AWS Lambda", "D. Amazon S3"],
        "answer": "A. AWS Organizations",
        "explanation": "AWS Organizations offers centralized management for multiple AWS accounts."
    },
    {
        "question": "Which AWS service is a Business Intelligence tool used for creating and managing interactive data visualizations ?",
        "choices": ["A. Amazon QuickSight", "B. Amazon EMR", "C. Amazon Kinesis", "D. Amazon Redshift"],
        "answer": "A. Amazon QuickSight",
        "explanation": "Amazon QuickSight is a fast, cloud-powered business analystics service that makes it easy to build visualizations, perform ad-hoc analysis adn quickly get business insights"
    },
    {
        "question": "What is the primary function of AWS Marketplace",
        "choices": ["A. To provide a service for assessing, auditing, and evaluating the configurations of AWS resources", "B. To provide visibility and control if your infrastructure on AWS", "C. To offer a digital catalog where users can find,test,buy and deploy necessary software solutions", "D. To Provide configuration management service that includs instances if Chef and Puppet"],
        "answer": "C. To offer a digital catalog where users can find,test,buy and deploy necessary software solutions",
        "explanation": "The AWS Marketplace's main function is to provide a digital catalog from which users can find,test,buy and deploy the software they need on AWS"
    },
    {
        "question": "Which of the following AWS services is best suitable to optimize transfer speeds for uploading large amounts of data to Amazon S3 from various global locations ?",
        "choices": ["A. Amazon Glacier", "B. Amazon S3 Transfer Acceleration", "C. Amazon EBS Snapshots", "D. Amazon Elastic File System"],
        "answer": "B. Amazon S3 Transfer Acceleration",
        "explanation": "Amazon S3 Transfer Acceleration is an AWS service specifically desgined to speed up larger data uplaods into Amazon S3 from various locations globally"
    },
    {
        "question": "What is the most convenient way to report AWS costs to individual departments within an organization ?",
        "choices": ["A. Assigning fixed percentages of the total AWS costs to each department", "B. Creating different AWS accounts for each department", "C. Requesting detailed billing reports for every service used and manually assigning costs to each department", "D. Allocating costs using cost allocation tags"],
        "answer": "D. Allocating costs using cost allocation tags",
        "explanation": "AWS allows you to assign metadata to your AWS resources in the form of tags"
    },
    {
        "question": "What AWS tool would potentially help the most in reducing computing costs by identifying unused resources ?",
        "choices": ["A. AWS CloudTrail", "B. AWS Trusted Advisor", "C. AWS GuardDuty", "D. AWS Inspector"],
        "answer": "B. AWS Trusted Advisor",
        "explanation": "AWS Trusted Advisor helps optimize your AWS enviroment by providing real-time guidance to help you provision your resources following best practices"
    },
    {
        "question": "Which AWS service can be used to automate the process of creating and managing a collection of related AWS resources ?",
        "choices": ["A. Amazon EC2", "B. AWS CloudFormation", "C. AWS Lambda", "D. Amazon RDS"],
        "answer": "B. AWS CloudFormation",
        "explanation": "AWS CloudFormation is a service that helps you model and setup your AWS services resources so you can spend less time managing those resources and more time foucsing on your applications"
    },
    {
        "question": "Which AWS service is primarily known for sending notifications ?",
        "choices": ["A. Amazon EC2", "B. Amazon RDS", "C. AWS Lambda", "D. Amazon SNS"],
        "answer": "D. Amazon SNS",
        "explanation": "Amazon SNS (Simple Notification Service) is a managed service that provides message delivery from publishes to subsribers"
    },
    {
        "question": "What is the AWS pricing policy for inbound data transfer ?",
        "choices": ["A. Inbound data transfer into all AWS regions from the internet is free", "B. Inbound data transfer is always charged", "C. Inbound data transfer is charged when data is transferred between different AWS regions", "D. Inbound data transfer is charged when teh data is transferrred within the same AWS regions"],
        "answer": "A. Inbound data transfer into all AWS regions from the internet is free",
        "explanation": "AWS does not charge for inbound data transfer"
    },
    {
        "question": "Which AWS Support plan offers application architecture best practice recommendations tailored to specific use-cases of the customer?",
        "choices": ["A. AWS Business Support", "B. AWS Basic Support", "C. AWS Developer Support", "D. AWS Enterprise Support"],
        "answer": "A. AWS Business Support",
        "explanation": "AWS Business Support offers features like 24/7 technical support and architectural guidance in the context of the customer's specific use-cases and it is ideal for production workloads in AWS"
    },
    {
        "question": "Which AWS service would work best for a startup that needs to implement a soultion for sending promotional emails to its growing customer base ?",
        "choices": ["A. Amazon Simple Storage Service (S3)", "B. Amazon Relational Database Service (RDS)", "C. Amazon Simple Email Services (Amazon SES)", "D. Amazon Elatic BeanStalk"],
        "answer": "C. Amazon Simple Email Services (Amazon SES)",
        "explanation": "Amazon SES is a cost-effective, flexible, and scalable email service that enables developers to send emails from within any application"
    },
    {
        "question": "Which of the following AWS services does NOT support encryption at rest ?",
        "choices": ["A. Amazon Simple Notification Service", "B. Amazon Simple Storage Service (S3)", "C. AWS Key Management Service", "D. Amazon Elastic Block Store (EBS)"],
        "answer": "A. Amazon Simple Notification Service",
        "explanation": "Amazon Simple Notification Service does not support encryption at rest."
    },
    
    {
        "question": "Which AWS service is designed to optimize transfer speeds from across the world into S3 buckets ?",
        "choices": ["A. AWS Direct Connect", "B. Amazon CloudFront", "C. Amazon S3 Transfer Acceleration (S3TA)", "D. AWS Global Accelerator"],
        "answer": "C. Amazon S3 Transfer Acceleration (S3TA)",
        "explanation": "Amazon S3 Transfer Acceleration enables fast, easy and secure transfers of files over long distances between your client and your Amazon S3 bucket"
    },
    
    {
        "question": "Which AWS service enables you to securely connect your on-premises network to a VPC ? ",
        "choices": ["A. AWS transit", "B. Elastic IP", "C. Amazon Connect", "D. AWS Direct Connect"],
        "answer": "D. AWS Direct Connect",
        "explanation": "AWS Direct Connect is a service that enables you to establish a dedicated network"
    },
    
    {
        "question": "Which AWS service would you use to analyze and visualize your logs in real time ? ",
        "choices": ["A. Amazon CloudWatch Logs Insights", "B. Amazon Athena", "C. Amazon Macie", "D. Amazon Redshift"],
        "answer": "A. Amazon CloudWatch Logs Insights",
        "explanation": "Amazon CloudWatch Logs Insights enables you to interactively search and analyze your log data in Amazon CloudWatch Logs."
    },
    
    {
        "question": "What will be an appropriate AWS service with MySQL compatibilty that can provide a cross-regional data replication feature ?",
        "choices": ["A. Amazon Neptune", "B. Amazon DynamoDB", "C. Amazon RDS", "D. Amazon Redshift"],
        "answer": "C. Amazon RDS",
        "explanation": "Amazon RDS is a service that makes it easier to set up, operate and run realtional databases."
    },
    
    {
        "question": "Which AWS service would you use to predict your future costs based on machine learning ?",
        "choices": ["A. AWS Trusted Advisor", "B. AWS CloudWatch", "C. AWS Cost Explorer", "D. AWS Budgets"],
        "answer": "C. AWS Cost Explorer",
        "explanation": "AWS Cost Explorer has intergrated suite of tools which can be used to examine patterns in your cost data."
    },
    {
        "question": "What is the primary functions of AWS CloudHSM in terms of compliance requirements and data security ?",
        "choices": ["A. It enables users to meet corporate, contactural and regulatory complaince requirements for data security by using dedicated hardware appliances within AWS Cloud", "B. It provides a framework for desgining and implementing secure cloud enviroments", "C. It enables monitoring and logging features in the cloud for security and auditing purposes", "D. It provides a full suite of tools for the proper management of user access controls and permissions"],
        "answer": "A. It enables users to meet corporate, contactural and regulatory complaince requirements for data security by using dedicated hardware appliances within AWS Cloud",
        "explanation": "AWS CloudHSM primarily helps customers to meet corporate, contactual and regulatory compliance requirements for data security by using dedicated Hardware Security Module"
    },
    {
        "question": "Which of the following AWS services provides a detailed view of AWS enviroment to help identify resources that are not being used or are underutilized ?",
        "choices": ["A. AWS GuardDuty", "B. AWS CloudTrail", "C. AWS Trusted Advisor", "D. AWS Config"],
        "answer": "C. AWS Trusted Advisor",
        "explanation": "AWS Trusted Advisor is an online resource to help you reduce cost , increase performance, and improce security by optimizing your AWS enviroment."
    },
    {
        "question": "Which AWS service helps to analyze cost trends, track reserved instance usage and monitor cost drivers ?",
        "choices": ["A. AWS Trusted Advisor", "B. AWS QuickSight", "C. AWS Cost Explorer", "D. AWS Glacier"],
        "answer": "C. AWS Cost Explorer",
        "explanation": "AWS Cost Explorer enables you to visualize understand and manage your AWS costs and usage over time."
    },
    {
        "question": "What is the key function of AWS Elastic Load Balancing (ELB)",
        "choices": ["A. Scale Applications in real-time based on demand", "B. Database Management system for applications", "C. Provide storage solution for applications", "D. Automatically distribute incoming application traffic across mulitple targets"],
        "answer": "D. Automatically distribute incoming application traffic across mulitple targets",
        "explanation": "AWS Elastic Loan Balancing (ELB) is used to automatically distribute your incoming application traffic across mulitple targets that you are running"
    },
    {
        "question": "Which AWS service provides a secure, resizeable compute capacity in the cloud and is designed to make web-scale cloud computing easier for developers ?",
        "choices": ["A. Amazon Elastic Compute Cloud", "B. Amazon Lightsail", "C. Amazon Elastic Container Service", "D. AWS Lambda"],
        "answer": "A. Amazon Elastic Compute Cloud",
        "explanation": "Amazon Elastic Compute Cloud is a web service which is easy for developers to use and provide a secure, resizeable compute capcity in the cloud"
    },
    {
        "question": "Which AWS service is a storage service used for setting up backups and replicating data ? ",
        "choices": ["A. Amazon S3", "B. Amazon Elastic Beanstalk", "C. Amazon Redshift", "D. Amazon EC2"],
        "answer": "A. Amazon S3",
        "explanation": "Amazon S3 is a scalable storage service that allows data archiving, backup and resotoration, data analyses and many other operations."
    },
    {
        "question": "What is a primary benefit of using the AWS Cloud for your IT infrastructure ? ",
        "choices": ["A. Limits the use of automation and machine learning", "B. Scalability and elasticity", "C. Requires large upfront cost", "D. Requires in-depth physical hardware maintenance"],
        "answer": "B. Scalability and elasticity",
        "explanation": "AWS Cloud essentially removes the need for physical hardware in a traditional IT infrastructure"
    },
    {
        "question": "What is the best AWS Cloud service to use for data preservation and long-term backup ? ",
        "choices": ["A. Amazon DynamoDB", "B. Amazon QuickSight", "C. Amazon Elastic Compute Cloud (EC2)", "D. Amazon S3 Glacier"],
        "answer": "D. Amazon S3 Glacier",
        "explanation": "Amazon S3 Glacier is a secure,durable, and extremely low-cost cloud storage service for data archiving and long-term backup."
    },
    {
        "question": "What makes a hosted Hadoop framework a good choice for managing and analyzing large datasets in AWS?",
        "choices": ["A. It allows the distribution of data and computation across multiple servers", "B. It provides a relational data base service", "C. It provides data warehousing services", "D. It allows real-time processing"],
        "answer": "A. It allows the distribution of data and computation across multiple servers",
        "explanation": "The hosted Hadoop framework is designed to distribute and manage large datasets and computation across clusters of computers using simple programming models"
    },
    {
        "question": "Which AWS service allows you to run batch jobs in a cost-effective manner ?",
        "choices": ["A. AWS Lambda", "B. AWS Fargate", "C. Amazon LightSail", "D. AWS Batch"],
        "answer": "D. AWS Batch",
        "explanation": "AWS Batch enables developers , scientist, and engineers to cost-effectively run hundreds of thousands of batch computing jobs on AWS."
    },
    {
        "question": "What is the best way to control costs and still have high availability for a database in AWS ? ",
        "choices": ["A. Implement AWS Redshift with mulit-region configuration", "B. Implement AWS Aurora with muli-AZ configuration", "C. Implement AWS Neptune with mulit-region configuration", "D. Implement AWS DynamoDB with mulit-region configuration"],
        "answer": "B. Implement AWS Aurora with muli-AZ configuration",
        "explanation": "AWS Aurora is a managed database service that automatically scales and provides high availability"
    },
    {
        "question": "Which AWS service allows continous monitoring and recording of your AWS resource configurations and aids in automating the evaluation of recorded configurations against desired configurations ?",
        "choices": ["A. AWS Config", "B. AWS CloudTrail", "C. Amazon Inspector", "D. Amazon CloudWatch"],
        "answer": "A. AWS Config",
        "explanation": "AWS Config enables you to assess,audit and evaluate the configurations of your AWS resources"
    },
    {
        "question": "Which AWS service is commonly used for preparing and loading data for analytics ?",
        "choices": ["A. AWS Glue", "B. Amazon S3", "C. AWS Lambda", "D. Amazon EC2"],
        "answer": "A. AWS Glue",
        "explanation": "AWS Glue is a fully managed extract, transform and load (ETL) service that is commonly used for preparing and loading data fro analytics"
    },
    {
        "question": "Which service provided by AWS allows the users to use the same machine learning technology applied on major Amazon's websites ? ",
        "choices": ["A. Amazon Translate", "B. Amazon Personalize", "C. Amazon S3", "D. Amazon QuickSight"],
        "answer": "B. Amazon Personalize",
        "explanation": "Amazon Personalize is a machine learning service provided by AWS that makes it easy for developers to create indivdualized recommendations for customers using thier applications ."
    },
    {
        "question": "Which AWS service gives you visibility into user activty by recording actions taken on your account ? ",
        "choices": ["A. AWS CloudTrail", "B. Amazon CloudWatch", "C. AWS IAM", "D. AWS WAF"],
        "answer": "A. AWS CloudTrail",
        "explanation": "AWS CloudTrail is a service that gives you the ability to manage governance, compliance, operations auditing and risk auditing of your AWS account"
    },
    {
        "question": "What happens when you stop an Amazon EC2 instance in terms of cost management ? ",
        "choices": ["A. Price rates increase due to the stopping of the instance", "B. You stop incurring any costs immediately", "C. You stop getting billed for additional instance hours", "D. You are still billed for instace hours even when stopped"],
        "answer": "C. You stop getting billed for additional instance hours",
        "explanation": "When you stop an instance, it enters the stopped state and its status changes to stopping and then to stopped. You stop getting billed for additonal instance hours"
    },
    {
        "question": "In the context of AWS Elastic Load Balancer, which of the following is the responsbility of the client system ? ",
        "choices": ["A. Monitoring the health of EC2 instances and reporting back to the load balancer", "B. Sending each request to the load balancer, not to individual EC2 instances", "C. Providing a replacement for failed EC2 instances", "D. Deciding the distribution algorithm the load balancer should use"],
        "answer": "B. Sending each request to the load balancer, not to individual EC2 instances",
        "explanation": "In an AWS Elastic Load Balancer setup, its the client's responbility to send requests to the load balancer itself"
    },
    {
        "question": "Which AWS service provides automatic protection that helps to minimize the impacts of DDos attacks ?",
        "choices": ["A. AWS Shield Standard", "B. AWS GuardDuty", "C. AWS WAF", "D. AWS Inspector"],
        "answer": "A. AWS Shield Standard",
        "explanation": "AWS Shield Standard provides automatic DDos protection for applications hosted on AWS, which can reduce the risk and impact of DDoS attacks"
    },
    {
        "question": "In the context of AWS, which among the following disaster recovery approaches is the most cost-effective but can tolerate a few hours of data loss",
        "choices": ["A. Pilot Light", "B. Mulit-site active/active", "C. Warm Standby", "D. Backup and Restore"],
        "answer": "D. Backup and Restore",
        "explanation": "Backup and Restore is the most cost-effective disater recovery strategy."
    },
    {
        "question": "Which component of the AWS Identity and Access Management would be most appropraite for controlling a user's access to a particular AWS service in a web app ?",
        "choices": ["A. IAM policies", "B. IAM groups", "C. IAM roles", "D. IAM users"],
        "answer": "A. IAM policies",
        "explanation": "IAM polices define permissions and cab be assoicated with IAM user,groups or roles. It will allow you to manage access to AWS services such as a particular web application"
    },
    {
        "question": "Which of the following is NOT a service offered by AWS Storage Gateway ? ",
        "choices": ["A. Tape Gateway", "B. File Gateway", "C. Object Gateway", "D. Volume Gateway"],
        "answer": "C. Object Gateway",
        "explanation": "AWS Storage Gateway is a service that connects your on-premises software applications with cloud-based storage to provide seamless and secure intergration between your on-premise IT enviroment"
    },
    {
        "question": "What AWS service allows developers to build,deploy, and scale containerized applications faster ? ",
        "choices": ["A. AWS Lambda", "B. AWS S3", "C. Amazon EC2", "D. AWS Fargate"],
        "answer": "D. AWS Fargate",
        "explanation": "AWS Fargate is a serverless compute engine for containers that eliminates the need to manage underlying infrastructure."
    },
    {
        "question": "Which AWS service allows network connectivity between two VPCs, that enables you to route traffic between them privately ?",
        "choices": ["A. Transit Gateway", "B. VPC Peering", "C. VPN Connection", "D. Direct Connect"],
        "answer": "B. VPC Peering",
        "explanation": "VPC Peering service is used to connect two VPCs, enabling you to route traffic between them using private IPv4 addresses or IPv6 addresses"
    },
    {
        "question": "Which AWS service can be used to provide low latency access to objects stored in Amazon S3 globally",
        "choices": ["A. Amazon CloudFront", "B. Amazon Elastic Compute Cloud EC2", "C. Amazon Simple Queue Service", "D. Amazon Elastic File System"],
        "answer": "A. Amazon CloudFront",
        "explanation": "Amazon CloudFront is a web service that speeds up distribution if your static and dynamic web content"
    },
    {
        "question": "Which among the following AWS services in not intended for maintaining application availability and decreasing down time ?",
        "choices": ["A. Auto Scaling", "B. Amazon CloudTrail", "C. Amazon Route 53", "D. Amazon Elastic Load Balancer"],
        "answer": "B. Amazon CloudTrail",
        "explanation": "Amazon CloudTrail is a service that enables governance,compliance, operational auditing and risk auditing of your AWS account"
    },
    {
        "question": "What AWS service would you use to speed up distribution of dynamic and static web content to users worldwide ? ",
        "choices": ["A. AWS S3", "B. Amazon Route53", "C. Amazon CloudFront", "D. Amazon EC2"],
        "answer": "C. Amazon CloudFront",
        "explanation": "Amazon CloudFront is a fast content delivery network (CDN) service that securely delviers data,videos,applications and APIs to customers globally with low latency."
    },
    {
        "question": "Which AWS service allows for offline transfer of large volumes of data into AWS when faced with limited bandwidth ? ",
        "choices": ["A. AWS Data Pipeline", "B. AWS Redshift", "C. AWS Glue", "D. AWS Snowball"],
        "answer": "D. AWS Snowball",
        "explanation": "AWS Snowball, a part of the AWS Snow Family, is a data migration and edge computing device that is designed to handle large quantites of data for offline migration into AWS"
    },
    {
        "question": "How can you create a seamless failover experience for a healthcare application using AWS RDS in case of an AZ failure",
        "choices": ["A. Configure the database in RDS read replica mode with automatic failover", "B. Launching multiple RDS databases across several AZs and manually switching connections", "C. Deploy mulitple EC2 instances across various AZs", "D. Configure the RDS database in Muli-AZ mode with automatic failover"],
        "answer": "D. Configure the RDS database in Muli-AZ mode with automatic failover",
        "explanation": "By Configuring an RDS instance in Multi-AZ mode with automatic failover"
    },
    {
        "question": "Which AWS service should you use to monitor data from millions of IoT devices ? ",
        "choices": ["A. AWS CodeStar", "B. AWS IoT Core", "C. Amazon RDS", "D. AWS Lambda"],
        "answer": "B. AWS IoT Core",
        "explanation": "AWS IoT Core is corect answer as it is a managed cloud platform that lets connected devices easily and securely interact with cloud applications and toher devices"
    },
    {
        "question": "What is the primary purpose of an Access Key ID in AWS ? ",
        "choices": ["A. To log in AWS Management Console", "B. To perform programmatic calls to AWS services", "C. To authenticate the AWS hardware devices", "D. To encrypt data stored in AWS"],
        "answer": "B. To perform programmatic calls to AWS services",
        "explanation": "In AWS, an Access Key ID and Secret Access Key are used for programmatic (API) calls to AWS services"
    },
    {
        "question": "Which API provides AWS Business Support customers with detailed information about events that affect their AWS services and resources",
        "choices": ["A. AWS KMS API", "B. AWS Health API", "C. AWS CloudTrail API", "D. AWS Cognito API"],
        "answer": "B. AWS Health API",
        "explanation": "The AWS Health API is designed to provide AWS Business Support customers with detailed information about events that could potentially disrupt their AWS services."
    },
    {
        "question": "Which AWS service provides a customer with a portal to access security and compliances reports and online agreements ? ",
        "choices": ["A. AWS Compliance Portal", "B. AWS Inspector", "C. AWS Shield", "D. AWS Artifact"],
        "answer": "D. AWS Artifact",
        "explanation": "AWS Artifact is an online, self-service portal which provides access to AWS security and compliance reports , as well as certain online agreements."
    },
    {
        "question": "What AWS service does not support automatic rollback on failure during deployment ? ",
        "choices": ["A. AWS Elastic Beanstalk", "B. AWS OpsWorks", "C. AWS CodeDeploy", "D. AWS CloudFormation"],
        "answer": "C. AWS CodeDeploy",
        "explanation": "AWS CodeDeploy does not support automatic rollback failure during deployment. In comparison AWS CloudFormation, AWS Elastic BeanStalk , and AWS OpsWorks support automatic rollback on failure during deployment to protect the system stability and data consistency"
    },
    {
        "question": "A pharmaceutical company needs a service that offers the capability to analyze the text inside its vast collection of patents and other documents, in oreder to extract specific chemical entities, medical conditions, and various clinical data. Which AWS service would best fit this requirement?",
        "choices": ["A. Amazon Comprehend Medical", "B. Amazon Rekognition", "C. Amazon Lex", "D. Amazon Polly"],
        "answer": "A. Amazon Comprehend Medical",
        "explanation": "Amazon Comprehend Medical is a service that offers natural language processing for medical and clincal text."
    },
    {
        "question": "Which perspective of the AWS Cloud Adoption Framework requires an organization to evaluate its readiness for the cloud ?",
        "choices": ["A. Manage", "B. Govern", "C. Align", "D. Sustain"],
        "answer": "C. Align",
        "explanation": "Align phase requires an organization to evaluates its cloud readiness by identifying its capacity gaps"
    },
    {
        "question": "What is a key feature of AWS Cost & Usage Report (AWS CUR) that distinguishes it from other AWS cost management tools ? ",
        "choices": ["A. It provides the most detailed cost and usage data which can be published to an Amazon S3 bucket", "B. It lets you explore AWS services and create an estimate for the cost of your use cases on AWS", "C. It helps you visualize, understand, and manage your AWS costs and usage over time", "D. It alerts you when your costs or usage exceed your budgeted amount"],
        "answer": "A. It provides the most detailed cost and usage data which can be published to an Amazon S3 bucket",
        "explanation": "AWS Cost & Usage Report is a distinct in its offering of the most comprehensive set of costs and usage data available, which can be published to an S3 bucket"
    },
    {
        "question": "In the AWS Well-Architectured Framework, which pillar emphasizes on choosing the most suitable resource types ?",
        "choices": ["A. Performance Efficiency", "B. Operational Excellence", "C. Cost Optimaztion", "D. Reliability"],
        "answer": "A. Performance Efficiency",
        "explanation": "Performance Efficiency in the AWS Well Architected Framework emphasizes on using IT and computing resources efficiently"
    },
    {
        "question": "What does Amazon CloudHSM enable in AWS Security ? ",
        "choices": ["A. It provides encryption for S3 objects server-side", "B. It functions like a public key infrastructure (PKI) ", "C. It enables user to manage, generate, and use encryption keys", "D. It serves as a firewall for safeguarding web applications"],
        "answer": "C. It enables user to manage, generate, and use encryption keys",
        "explanation": "Amazon CloudHSM is a hardware Security module operating on the cloud. Its principal function is to generate, use, and manage encryption keys, providing a secure key storage system and proficient cyptographical operations for AWS applications"
    },
    {
        "question": "Which AWS service would you use to secure client-side data upload to Amazon S3 ? ",
        "choices": ["A. Amazon Cognitio", "B. Amazon Rekognition", "C. Amazon QuickSight", "D. Amazon Polly"],
        "answer": "A. Amazon Cognitio",
        "explanation": "Amazon Cognitio is a service that helps you create unique identites for your users and authentication them for secure access to your applications"
    },
    {
        "question": "What is a significant difference in terms of scaling when comparing Amazon DynamoDB and ElastiCache ",
        "choices": ["A. Amazon DynamoDB scales automatically, while ElastiCache needs to be manually scaled", "B. Neither services offer scalable solutions", "Both Scale automatically", "ElasiCache scales automatically while Amazon DynamoDB needs to be manually scaled"],
        "answer": "A. Amazon DynamoDB scales automatically, while ElastiCache needs to be manually scaled",
        "explanation": "Amazon Dynamo DB is fully managed but ElastiCache scaling is typically manual adn requires careful planning"
    },
    {
        "question": "Which AWS service offers a guided approach for sizing, configuring, and deploying third-party applications like SQL Server Always-on and SAP on AWS ",
        "choices": ["A. AWS CloudFormations", "B. AWS CodePipeline", "C. AWS Launch Wizard", "D. AWS App Runner"],
        "answer": "C. AWS Launch Wizard",
        "explanation": "AWS Launch Wizard is correct because it provides a step-by-step method for sizing, configuring, and deploying applications, inlcuding SQL server Always-on and SAP on AWS"
    },
    {
        "question": "Which AWS service can be used to analyze user behavior, web traffic, application performance, and other such metrics ? ",
        "choices": ["A. Amazon CloudWatch", "B. AWS CloutTrail", "C. Amazon Inspector", "D. AWS Directory Service"],
        "answer": "A. Amazon CloudWatch",
        "explanation": "Amazon CloudWatch is the service that's designed to monitor your AWS resources and the appilications you run on AWS in real time."
    },
    {
        "question": "Which AWS service allows network connectivity between two VPCs, that enables you to route traffic between them privately",
        "choices": ["A. Direct Connect", "B. Transit Gateway", "C. VPN Connection", "D. VPC Peering"],
        "answer": "D. VPC Peering",
        "explanation": "VPC Peering service is used to connect two VPCs, enabling you to route traffic between them using private IPv4 or IPv6 addresses"
    },
    {
        "question": "Which AWS service would you ise to simplify, manage, and quickly deploy applications configuration changes without the requirement for additional coding or service restarts ? ",
        "choices": ["A. AWS AppConfig", "B. AWS CodeDeploy", "C. AWS CloudTrail", "D. AWS Lambda"],
        "answer": "A. AWS AppConfig",
        "explanation": "AWS AppConfig is the best choice for managing and deploying application configuration changes quickly and reliably without having to write additional code or restart services"
    },
    {
        "question": "What is the cheif benefit of AWS Direct Connect in terms of bandwidth and costs ? ",
        "choices": ["A. Automates the routing of your global data through the AWS network", "B. Enables more predictable data transfer performance and can reduce costs", "C. Increases data latency to provide enhanced security", "D. Mitigates need for Internet Service Provider (ISP)"],
        "answer": "B. Enables more predictable data transfer performance and can reduce costs",
        "explanation": "AWS Direct Connect is a network service that provides an alternative to using the internet to connect a user's on premise sites with AWS."
    },
    {
        "question": "What is the primary use case of AWS CodeCommit service in AWS ? ",
        "choices": ["A. To manage a secure Git-based repository", "B. To create continous delivery pipelines", "C. To migrate data between storage systems and AWS", "D. To deploy your applications onto AWS"],
        "answer": "A. To manage a secure Git-based repository",
        "explanation": "AWS CodeCommit is a fully-managed source control service that hosts secure Git-based repositories"
    },
    {
        "question": "Which AWS service should a Cloud Practitioner use to ensure that there are no open access permissions on thier S3 buckets ? ",
        "choices": ["A. Amazon Macie", "B. AWS IAM", "C. Amazon S3 Block Public Access", "D. Amazon S3 Transfer Acceleration"],
        "answer": "C. Amazon S3 Block Public Access",
        "explanation": "Amazon S3 Block Public Access provides settings for access points, buckets, and accounts to help you manage public access to Amazon S3 resources."
    },
    {
        "question": "Which AWS Service can be used for managing keys and cryptographic functions ?",
        "choices": ["A. AWS Key Management Service (KMS)", "B. AWS CloudTrail", "C. AWS Security Hub", "D. AWS Identity and Access Management"],
        "answer": "A. AWS Key Management Service (KMS)",
        "explanation": "AWS KMS is a managed service that makes it easy for you to create and control the keys used to encrypt your data"
    },
    {
        "question": "Which aspect of AWS's services is intended to improve performance by allowing increased read-only activity from a database ? ",
        "choices": ["A. Database transfer accleration", "B. Read Replicas", "C. Multi-AZ deployment", "D. Database caching"],
        "answer": "B. Read Replicas",
        "explanation": "A feature of Amazon RDS,read replicas allow you to create one or more off-replicas of a given source DB instance."
    },
    {
        "question": "Which AWS service automatically compiles compliance status of your account ? ",
        "choices": ["A. AWS Macie", "B. AWS Textract", "C. AWS GuardDuty", "D. AWS Config"],
        "answer": "D. AWS Config",
        "explanation": "AWS Config is a service that enables you to assess,audit, and evaluate the configurations of your AWS resources."
    },
    {
        "question": "Which of the following is untrue about AWS Shield in relation to the protection against DDoS attacks?",
        "choices": ["A. AWS Sheild requires manual activation every time a DDoS attack occurs", "AWS Sheild Offers automatic inline mitigations to minimize application downtime during a DDoS attack", "C. AWS Shield provides always-on detection of potential DDoS attacks", "D. There are two tiers of AWS Shield - Standard and Advanced, for enhanced protection"],
        "answer": "A. AWS Sheild requires manual activation every time a DDoS attack occurs",
        "explanation": ""
    },
    {
        "question": "How does Amazon Aurora handle database patching in a clustered enviroment ? ",
        "choices": ["A. Patches are applied to all nodes simultaneosly", "B. Patching is left to the customer in clustered enviroments", "C. Patches are applied to a replica which then becomes the primary node", "D. Patches are not applied in clustered enviroment"],
        "answer": "C. Patches are applied to a replica which then becomes the primary node",
        "explanation": "Aurora are applied to replica which then will become the primary node"
    },
    {
        "question": "Which of the following options correclty describes how to implement Server-Side Encryption in Amazon S3",
        "choices": ["A. Encryption is not necesassary as S3 data is automatically encrypted", "B. You can use one of the following: SSE-S3, SSE-KMS, or SSE-C", "C. Server-Side Encryption can only be implemented wiht AWS KMS keys (SSE-KMS)", "D. Use only the AES-256 Encryption standard SSE-S#"],
        "answer": "B. You can use one of the following: SSE-S3, SSE-KMS, or SSE-C",
        "explanation": "Amazon S3 provides three types of server-side encryption for data at rest. SSE-S3 uses keys that Amazon S3 manages. SEE-KMS employs AWS Key Management Services. SSE-C lets the user handle the encryption management"
    },
    {
        "question": "Which AWS Support plan offers the fastest response time for business-critical system down (P1) cases",
        "choices": ["A. Basic", "B. Enterprise", "C. Developer", "D. Business"],
        "answer": "B. Enterprise",
        "explanation": "The Enterprise support plan offers the fastest response time of less than 15 minutes for business-critical system down cases."
    },
    {
        "question": "What does Amazon EC2 Auto Scaling do to maintain resiliency ? ",
        "choices": ["A. It scales storage capacity of the instances", "B. It transmits connections among EC2 instances", "C. It alters the EC2 instance types to manage the load", "D. It launches and terminates instances as per requirements"],
        "answer": "D. It launches and terminates instances as per requirements",
        "explanation": "Amazon EC2 Auto Scaling maintains resiliency by launching and terminating instances depending upon the demand."
    },
    {
        "question": "What is the main function of a master account in AWS Organizations concerning consolidated billing ?",
        "choices": ["A. It automates the creation of a new member accounts through APIs", "B. It pays the charges of all the member accounts", "C. It provides consolidated monthly expenses for individual accounts", "D. It enforces service control polices for centralized service management"],
        "answer": "B. It pays the charges of all the member accounts",
        "explanation": "In AWS Organizations, the master account has the function to pay the charges of all the member accounts which helps in centralized billing and payment."
    },
    {
        "question": "What is the primary purpse of the AWS Wavelength service ? ",
        "choices": ["A. To provide AWS infrastructure offering optimized for mobile edge computing applications", "B. To allow customers to run compute and storage on-premises", "C. To run workloads that require single-digit millisecind latency in more locations", "D. To move extremly large amounts of data to AWS"],
        "answer": "A. To provide AWS infrastructure offering optimized for mobile edge computing applications",
        "explanation": "Amazon Wavelength is a infrastructure service that deploys AWS compute and storage services within cloud service provider"
    },
    {
        "question": "Which AWS Service can be used to monitor the queries of Amazon RDS and AWS resources ? ",
        "choices": ["A. AWS CloudTrail", "B. Amazon Macie", "C. AWS Config", "D. Amazon CloudWatch"],
        "answer": "A. AWS CloudTrail",
        "explanation": "AWS CloudTrail allows you to monitor the activity of your AWS resources and in your Amazon RDS CloudWatch does not track activites"
    },
    {
        "question": "Which AWS tool is designed to help manage, govern and automate systems for increased security and compliance across your AWS enviroment? ",
        "choices": ["A. AWS Control Tower", "B. Amazon Cloud Watch", "C. AWS CloudTrail", "D. AWS Config"],
        "answer": "A. AWS Control Tower",
        "explanation": "AWS Control tower offers the easiest way to set up and govern a new , secure mulit-account AWS enviroment."
    },
    {
        "question": "Which AWS service provides managed Hadoop Framework for processing of large quantites of data, particularly suitable for operational analytics ? ",
        "choices": ["A. Amazon Athena", "B. Amazon EMR", "C. Amazon QuickSight", "D. Amazon Elasticsearch Service"],
        "answer": "B. Amazon EMR",
        "explanation": "Amazon EMR provides a managed Hadoop framework that simplifies processing large amaounts of data across dynamically scalable Amazon EC2 instances"
    },
    {
        "question": "Which AWS service is most suitable for deploying and managing container applications ? ",
        "choices": ["A. Amazon EKS", "B. Amazon S3", "C. Amazon EC2", "D. AWS Lambda"],
        "answer": "A. Amazon EKS",
        "explanation": "Amazon Elastic Kubernetes Service is best suited for deploying and managing container applications. It provides a scalable highly-available Kubernetes control plane"
    },
    {
        "question": "Which of the following AWS service shows the estimated charges for your usage of AWS ervices within the month and your month-to-date AWS usage ? ",
        "choices": ["A. AWS CloudTrail", "B. AWS Billing and Cost Management", "C. AWS Simple Monthly calculator", "D. AWS cost explorer "],
        "answer": "B. AWS Billing and Cost Management",
        "explanation": "B. AWS Billing and Cost Management "
    },
    {
        "question": "What AWS feature can act as a guide rail for our AWS account and limit the maximum available permissions at the root, OU or child account level?",
        "choices": ["A. AWS Compute Optimizer", "B. Service Control Policies", "C. Resource Tags", "D. AWS CloudFormation"],
        "answer": "B. Service Control Policies",
        "explanation": "Service Control Policies act as guide rails on our AWS Account that determine the maximum available permissions on the root, OU or account level"
    },
    {
        "question": "We have a compute workload that needs to keep the customer data on premises. What AWS Service can help us do this?",
        "choices": ["A. Amazon Machine Image (AMI)", "B. Amazon FSx for Windows", "C. Amazon Lightsail ", "D. AWS Outposts"],
         "answer": "D. AWS Outposts",
        "explanation": "AWS Outposts is a hybrid cloud enviroment that will allow us to keep a portion of our infrastructure on premises"
    },
    {
        "question": "What AWS service is a fully managed SQL based cloud data warehouse?",
        "choices": ["A. Amazon Athena", "B. Amazon Simple Storage Service (Amazon S3)", "C. Amazon Aurora", "D. Amazon Redshift"],
         "answer": "D. Amazon Redshift",
        "explanation": "Amazon Redshift is a fully managed SQL based cloud data warehouse"
    },
    {
        "question": "What AWS service receives messages from a sender, and holds the messages until polled and received by a recipient?",
        "choices": ["A. Amazon Simple Queue Service (Amazon SQS)", "B. Amazon Simple Notification Service (Amazon SNS)", "C. Amazon Elastic Compute Cloud (Amazon EC2)", "D. Amazon DynamoDB"],
         "answer": "A. Amazon Simple Queue Service (Amazon SQS)",
        "explanation": "Amazon SQS recieves messages from a sender, and holds the messages until polled and received by a recipent"
    },
    {
        "question": "What type of AWS partner should we reach out to if we are looking to migrate into AWS and would like some help with the process?",
        "choices": ["A. AWS Hardware Partner", "B. AWS Service Partner", "C. AWS Software Partner", "D. AWS Training Partner"],
         "answer": "B. AWS Service Partner",
        "explanation": "AWS Service Partners can perform services with AWS like migrating and modernizing our applications"
    },
    {
        "question": "We have an established company in the cloud space and would like to branch into AWS. What AWS service can help us build and grow our AWS business?",
        "choices": ["A. AWS re:Post", "B. AWS Knowledge Center", "C. AWS Partner Central", "D. AWS IQ"],
         "answer": "C. AWS Partner Central",
        "explanation": "AWS Partner Central can help companies build and grow thier AWS business"
    },
    {
        "question": "What AWS Service can be used to create a dashboard to provide information on the progress of our AWS software development projects?",
        "choices": ["A. AWS CodeStar", "B. AWS Cloud9", "C. AWS CloudPipeline", "D. AWS CodeBuild"],
         "answer": "A. AWS CodeStar",
        "explanation": "AWS CodeStar can be used to create dashboards for development projects."
    },
    {
        "question": "We have a startup idea and would like to build out the initial product on AWS. What AWS Service can help us with resources for our startup?",
        "choices": ["A. AWS Activate", "B. AWS re:Post", "C. AWS IQ", "D. AWS MarketPlace"],
         "answer": "A. AWS Activate",
        "explanation": "AWS Activate can help us with resources for out startups running on AWS"
    },
    {
        "question": "As a software developer we have a growing number of integrations with our new microservices application. What AWS Service can we use to create and manage our APIs?",
        "choices": ["A. AWS Certificate Manager", "B. AWS Device Farm", "C. AWS Elastic Beanstalk", "D. Amazon API Gateway"],
         "answer": "D. Amazon API Gateway",
        "explanation": "Amazon API Gateway is useb to create and manage APIS that can be used with out AWS or on prem applications"
    },
    {
        "question": "An organization wants to backup Amazon EBS Volumes so they can be copied to other AWS Regions. What AWS Service can help us with this?",
        "choices": ["A. Amazon Neptune", "B. AWS Fargate", "C. Amazon EBS Snapshot", "D. AWS X-Ray"],
         "answer": "C. Amazon EBS Snapshot",
        "explanation": "Amazon EBS Snapshot can backup EC2 instances and copy Amazon EBS Volumes, so they can be moved to other AWS Regions"
    },
    {
        "question": "Which remote connection method requires a role to be in place on the target instance to function?",
        "choices": ["A. AWS Instance Connect", "B. SSH", "C. RDP", "D. AWS Session Manager"],
         "answer": "D. AWS Session Manager",
        "explanation": "AWS Session Manager requires a role to be in place on the target instance in order to function"
    },
    {
        "question": "Which AWS Well Architected Framework Pillar does experiment more often align with?",
        "choices": ["A. Performance Efficiency", "B. Operational Excellence", "C. Reliability", "D. Security"],
         "answer": "A. Performance Efficiency",
        "explanation": "Experiments more often is one of the design principles of the Performance Efficiency Pillar of the AWS Well Architected Framework"
    },
    {
        "question": "We want a service to manage our organizations approved software packages, that can be set up to auto update those packages from public repositories. What AWS service can do this?",
        "choices": ["A. AWS Cloud9", "B. AWS CodeBuild", "C. AWS CodeArtifact", "D. AWS CodeCompile"],
         "answer": "C. AWS CodeArtifact",
        "explanation": "AWS CodeArtifact is used to manage approved software packages, and can be configured to auto update those packages from public repositories"
    },
    {
        "question": "Which AWS Service has a collector that can collect environment data to help provide insights and build out a business case?",
        "choices": ["A. AWS Data Exports", "B. AWS Migration Evaluator", "C. AWS Budgets", "D. AWS Pricing Calculator"],
         "answer": "B. AWS Migration Evaluator",
        "explanation": "AWS Migration Evaluator will collect data on our enviroment, provide insights and help us build out a business case"
    },
    {
        "question": "Which AWS service is billed by instance uptime ? ",
        "choices": ["A. AWS Lambda", "B. Amazon DynamoDB", "C. Amazon RDS", "D. Amazon SQS"],
         "answer": "C. Amazon RDS",
        "explanation": "Amazon RDS is billed by the uptime of the instance."
    },
    {
        "question": "Which of the following AWS services enables short-term project holders to direclty connect with AWS certified experts for project consultation and implementation ?",
        "choices": ["A. AWS IQ", "B. AWS Training and Certification", "C. AWS Support", "D. AWS Marketplace"],
         "answer": "A. AWS IQ",
        "explanation": "AWS IQ is designed to help customers fing AWS certified third-party experts for on-demand project consultation and implementation"
    },
    {
        "question": "Which AWS service allows customers to directly manage the hardware infrastructure ?",
        "choices": ["A. AWS Fargate", "B. Amazon EC2", "C. AWS Lambda ", "D. Amazon RDS"],
         "answer": "B. Amazon EC2",
        "explanation": "Amazon EC2 offers the ability for customers to directly manage the hardware infrastructure because it's an infrastruture-as-a-service solution"
    },
    {
        "question": "Which AWS service enables on-premises cloud servers to backup data on AWS Cloud",
        "choices": ["A. AWS Storage Gateway", "B. Amazon VPC", "C. Amazon EC2", "D. Amazon S3"],
         "answer": "A. AWS Storage Gateway",
        "explanation": "AWS Storage Gateway is a hybrid cloud storage service that enables your on-premises applications to seamlessly use AWS Cloud storage="
    },
    {
        "question": "For a company requiring scalable , highly reliable, and fully managed file storage that adheres to the Server Message Block (SMB) protocol, which AWS service is most suitable ",
        "choices": ["A. Amazon FSx for Windows File Server", "B. Amazon Elastic Block Store", "C. Amazon Elastic File System", "D. Amazon Simple Storage Service"],
         "answer": "A. Amazon FSx for Windows File Server",
        "explanation": "Amazon FSx for Windows File Server offers fully managed Microsoft Windows file servers, underpinned by a fully native Windows file system. Amazon FSx deploys industry standard Server Message Block protocol to access file storage across a network. The other options - EBS is block-level storage for use with EC2 instances. Amazon S3 is an object storage service. Amazon EBS despite being file-level service , is a Linux based system that utlizes the NFS protocol, not SMB "
    },
    {
        "question": "Which AWS service allows you to effectively search through a large database of unstructured documents, such as text files and PDFS and return relevant results",
        "choices": ["A. Amazon Textract", "B. Amazon Polly", "C. Amazon Kendra", "D. Amazon Rekognition"],
         "answer": "C. Amazon Kendra",
        "explanation": "Amazon Kendra is a highly accurate and easy to use enterprise seach service that's powered by machine learning."
    },
    {
        "question": "Which AWS service allows you to provision either Windows or Linux desktops in just a few minutes and quickly scale to provide thousands of desktops to workers across the globe ?",
        "choices": ["A. Amazon WorkSpaces", "B. Amazon S3", "C. Amazon EC2", "D. AWS Lambda"],
         "answer": "A. Amazon WorkSpaces",
        "explanation": "Amazon WorkSpaces is managed, secure Desktop-as-a-service solutions. You can use Amazon WorkSpaces to provision either Linux or Windows Desktops in just a few minutes."
    },
    {
        "question": "What is one of the main advantages of migrating an on-premises database to Amazon RDS",
        "choices": ["A. You can use any databasae engine", "B. You can scale up without any downtime", "C. Database administration is fully automated", "D. Decrease in the amount of time spent on administractive task"],
         "answer": "D. Decrease in the amount of time spent on administractive task",
        "explanation": "When migrating an on-premises database to Amazon RDS, it reduces the time spent on many administrative tasks because Amazon RDS manages it"
    },
    {
        "question": "Which if the following services is an easy-to-use service that provides you with power of the AWS, with the simplicity of a VPS (Virtual Private Server)",
        "choices": ["A. Amazon EC2", "B. Amazon LightSail", "C. AWS Lambda", "D. Amazon S3"],
         "answer": "B. Amazon LightSail",
        "explanation": "Amazon LightSail is designed to be the easiest way to launchg and manage a virtual private server in AWS. LightSail plans include everything you need to jumpstart your project - a virtual machine, SSD-based storage, data transfer, DNS Management, and a Static IP."
    },
    {
        "question": "Which feature of AWS Health Dashboard allows you to view the overall operational health and availability of AWS services across all regions ?",
        "choices": ["A. Your account health", "B. AWS CloudFormation", "C. Service health", "D. Amazon CloudWatch"],
         "answer": "C. Service health",
        "explanation": "Service health in AWS Health Dashboard provides a panoramic view of AWS service operationals and availability across all regions"
    },
    {
        "question": "Which AWS service would a media company use to enrich thier datasets by finding and subscribing to third-party data sources ?",
        "choices": ["A. AWS Data Exchange", "B. AWS Redshift", "C. AWS Data Pipeline", "D. AWS Glue"],
         "answer": "A. AWS Data Exchange",
        "explanation": "AWS Data Exchange permits customers to discover, subscribe to and utlize third-party data in the cloud."
    },
    {
        "question": "What is the term for the AWS principle of using managed services or serverless services where possible, rather than spin up your own infrastructuer?",
        "choices": ["A. Think services, not servers", "B. Think servers, not services", "C. Serverless arhcicterture doesn't matter", "D. Always use EC2 instances"],
         "answer": "A. Think services, not servers",
        "explanation": "AWS recommends the prinicple of 'think services not servers'"
    },
    {
        "question": "Which of the following AWS services ios not a globally avaible service ? ",
        "choices": ["A. Amazon Workmail", "B. AWS Snowball", "C. Amazon CloudFront", "D. Amazon Route 53"],
         "answer": "B. AWS Snowball",
        "explanation": "AWS Snowball is not globally available service because it needs to be physically move to a location for data migration"
    },
    {
        "question": "Which AWS service or feature allows a user to visualize and troubleshoot their enviroments network traffic",
        "choices": ["A. Health Dashboard", "B. VPC Flow Logs", "C. Cloud Trail", "D. CloudWatch"],
         "answer": "B. VPC Flow Logs",
        "explanation": "VPC Flow Logs is an AWS feature that makes it possible to capture information about the IP traffic going to and from network interfaces in your VPC"
    },
    {
        "question": "Which AWS service is designed for online analytical processing ?",
        "choices": ["A. Amazon Athena", "B. Amazon CloudWatch", "C. Amazon Redshift", "D. Amazon Kinesis"],
         "answer": "C. Amazon Redshift",
        "explanation": "Amazon Redshift is a data warehousing service that allows running complex and analytic queries against petabytes of strucutred data "
    },
    {
        "question": "Which of the following services allows for the encryption of Amazon EBS snapshots? ",
        "choices": ["A. Amazon DynamoDB", "B. AWS Key Management Service", "C. AWS Lambda", "D. Amazon EC2"],
         "answer": "B. AWS Key Management Service",
        "explanation": "The AWS Key Management Service enables you to create and manage cyptographic keys, which you can use to encypt and decrypt Amazon EBS snapshots"
    },
    {
        "question": "Which type of data in an Amazon EC2 instance can be used to run a bootstrap script while launching the instance ?",
        "choices": ["A. Instance Configuration Data", "B. Instance user data", "C. instance AMI data", "D. instance metadata"],
         "answer": "B. Instance user data",
        "explanation": "Instance user data is the input data that you can specify while launching your instance in the form of a bootstrap script or configuration parameters."
    },
    {
        "question": "Which AWS service allows you to pay only for the compute time you consume and there are no upfront costs?",
        "choices": ["A. Amazon Redshift", "B. AWS Lambda", "C. Amazon RDS", "D. Amazon EMR"],
         "answer": "B. AWS Lambda",
        "explanation": "AWS Lambda lets you run code without provisioning or managing servers. You only pay for the compute time you consume - there is no charge when your code is not running "
    },
    {
        "question": "What Amazon Service can help accelerate in-memory of a database table in DynmaDB",
        "choices": ["A. Amazon DAX", "B. Amazon DynamoDB Max", "C. Amazon DynamoDB Fast ", "D. Amazon RDS"],
         "answer": "A. Amazon DAX",
        "explanation": "Amazon DAX or Amazon Dynamo Accelerator"
    },
    {
        "question": "Which Amazon Service is a fully managed source control service, desgined to host secure Git Repositories, making it easy for teams to collaborate on code in a scalable, secure and managed enviroment ?",
        "choices": ["A. Amazon Cloud9", "B. Amazon CloudFormation", "C.Amazon CloudFront", "D. Amazon CodeCommit"],
         "answer": "D. Amazon CodeCommit",
        "explanation": "Amazon CodeCommit acts like a GitHub respository for teams to collaborate on software development especailly those using other AWS services"
    },
    {
        "question": "Which of the following is NOT a key feature of Amazon Aurora",
        "choices": ["A. Automatic scaling of storage up to 128tb", "B. Compatiblity with MYSQL and PostgreSQL", "C. Support for up to 15 low-latency read replicas", "D. Built-in NoSQL database functionality"],
         "answer": "D. Built-in NoSQL database functionality",
        "explanation": "Amazon Aurora is a realation database service compatible with MySQL and PostgreSQp it does not inlcude built-in NoSQL database functionality"
    },    {
        "question": "Which of the following is a primary feature of Amazon DocumentDB ?",
        "choices": ["A. Native Support for SQL queries", "B. Full compatibility with DynamoDB APIS", "C. Fully Managed scalable document database service with MongoDB compatiblity", "D. Real-time data processing"],
         "answer": "C. Fully Managed scalable document database service with MongoDB compatiblity",
        "explanation": "Amazon DocumentDB is a fully mamanged scalable document database service"
    },   
    
    {
        "question": "What is the primary purpose of Amazon EMR (Elastic MapReduce) ?",
        "choices": ["A. Hosting Web applications with high availability", "B. Processing and analyzing large amounts of data using big data frameworks like hadoop", "C. Managing relational databases in the cloud", "D.Storing and retreiving unstructured data "],
         "answer": "B. Processing and analyzing large amounts of data using big data frameworks like hadoop",
        "explanation": "Amazon EMR is designed for processing and analyzing large datasets using big data frameworks like Hadoop Spark and Hive. "
    },
    {
        "question": "What encryption does AWS offer for data at rest ?",
        "choices": ["A. Server-side encryption", "B. IpSec", "C.TLS", "D. SSL"],
         "answer": "A. Server-side encryption",
        "explanation": "Server-side encrytion is used for data at rest. The other options are for encryption in transit"
    },
    {
        "question": "A company wants to automate vulnerability detection & response in our AWS enviroment. What AWS Service can help us with that",
        "choices": ["A. AWS Artifact", "B. Amazon Insepector", "C. Amazon GuardDuty", "D. Amazon Detective"],
         "answer": "B. Amazon Insepector",
        "explanation": "Amazon Inspector is an automated vulnerability management service that will help identify & automate responses for vulnerabilites in AWS"
    },
    {
        "question": "What AWS service can analyze our compute resources and help us identify resources that are under or over provisioned",
        "choices": ["A. AWS Compute Optimizer", "B. AWS Organizations", "C. AWS Control Tower", "D. AWS Resource Access Manager "],
         "answer": "A. AWS Compute Optimizer",
        "explanation": "AWS Compute Optimizer can analyze our compute resources and help identify resources that under or over provisioned"
    },
    {
        "question": "We have recently started implementing Infrastrucure a Code templates and would like to set up self service infrastructure deployments for approved stacks. What AWS service can help us with this ?",
        "choices": ["A. AWS Compute Optimizer", "B. AWS Service Catalog", "C. AWS Resource Access Manager", "D. AWS Control Tower"],
         "answer": "B. AWS Service Catalog",
        "explanation": "AWS Service Catalog can help us create, organize and share our IaC templates and create self service delpoyments of approved infrastructure"
    },
    {
        "question": "Which type of ELB assits with deploying and managing 3rd party virtual appliances ",
        "choices": ["A. Application Load Balancer", "B. Gateway Load Balancer", "C. Classic Load Balancer", "D. Network Load Balancer"],
         "answer": "B. Gateway Load Balancer",
        "explanation": "The Gateway Load Balancer helps with deploying and managing 3rd party virtual appliances"
    },
    {
        "question": "We have an application that has a need for high performance epheremal storage attached to our EC2 hosts. Which AWS Storage service can be used for this case?",
        "choices": ["A. Amazon Fsx for Windows", "B. Amazon Elastic Block Storage", "C. EC2 instance store", "D. Amazon S3"],
         "answer": "C. EC2 instance store",
        "explanation": "EC2 instance store is a high performance storage physically attached EC2 host servers. This storage is ephermal, which means it loses data when the attached EC2 instance is terminated"
    },
    {
        "question": "What AWS service can be used to periodically send billing data to an S3 bucket, or be used in an Amazon QuickSight dashboard?",
        "choices": ["A. AWS Cost Explorer", "B. AWS Budgets", "C. Consolidated Billing", "D. AWS Data Exports"],
         "answer": "D. AWS Data Exports",
        "explanation": "AWS Data Exports can periodically send billing data to an S3 bucket or be exported to Amazon QuickSight Dashboard"
    },
    {
        "question": "What can we use AWS CodeStar for ?",
        "choices": ["A. Create dashboards to provide progress for projects being developed in AWS", "B. Teams to collaborate in a git repository", "C. Distribute incoming request to a pool of resources", "D. Converting Ip address to domain names"],
         "answer": "A. Create dashboards to provide progress for projects being developed in AWS",
        "explanation": "AWS CodeStar is a unified user interface that can be used to create dashboards for developement projects"
    },
    {
        "question": "A company is preparing to migrate into AWS. Before they can develop a migration plan they need to understand their application enviroment. What AWS service can help them with this ?",
        "choices": ["A. AWS Transfer Family", "B. AWS Schema Conversion Tool", "C. AWS Application Migration Service", "D. AWS Application Discovery Service"],
         "answer": "D. AWS Application Discovery Service",
        "explanation": "AWS Application Discovery Service will often be our first step in migrating to AWS. It can help us prepare to migrate by discovering our application servers, connections and dependencies."
    },
    {
        "question": "Where can we store Docker Images in AWS , and share those images publicly or privately ? ",
        "choices": ["A. AWS Fargate", "B. AWS Lambda", "C. Amazon Elastitc Container Registry (ECR)", "D. Amazon Elastic Container Service (ECS)"],
         "answer": "C. Amazon Elastitc Container Registry (ECR)",
        "explanation": "Amazon ECR is registry where we can store our Docker images and share them publicly or privately"
    },
    {
        "question": "What AWS Service is a developer centric PaaS where code can be uploaded via an Integrated Development Enviroments or Git Repository and resources will be provisioned in AWS to run code",
        "choices": ["A. AWS Elastic Beanstalk", "B. AWS Cloud9", "C. AWS CodeCommit", "D. AWS Amplify"],
         "answer": "A. AWS Elastic Beanstalk",
        "explanation": "AWS Elastic Beanstalk is a a developer centric PaaS where code can be uploaded via IDE or Git and resources will be provisioned in AWS to run the code"
    },
    {
        "question": "A company wants to use AWS to manage its customer experience solution, including chat bots, Interactive Voice Response (IVR) and omnichannel contact tools. What AWS service can help us with this ?",
        "choices": ["A. Amazon Simple Email Service", "B. Amazon WorkSpaces", "C. Amazon Kendra", "D. Amazon Connect"],
         "answer": "D. Amazon Connect",
        "explanation": "Amazon Connect is a a customer experience solution which allows us to manage things like chat boots , IVR, and omnichannel contact tools."
    },
    {
        "question": "We have a regulatory need to create a database that cannot be deleted or modified, only added to, Which AWS service can help us with this ?",
        "choices": ["A. Amazon DynamoDB", "B. Amazon Neptune", "C. Amazon Quatum Ledger Database", "D. Amazon RDS"],
         "answer": "C. Amazon Quatum Ledger Database",
        "explanation": "Amazon QLDB is an immutable database that cannot be overwritten or deleted, only added to"
    },
    {
        "question": "As a system administrator we need to backup some of our data to another region in order to meet as an audit requirement. Which AWS service can help us do this ?",
        "choices": ["A. Amazon EBS", "B. Amazon Backup", "C. Amazon Route 53", "D. AWS Storage Gateway"],
         "answer": "B. Amazon Backup",
        "explanation": "AWS Backup can be used to take backups of AWS resources and store them in other regions"
    },
    {
        "question": "We have a diagnostic application that sends application data to a machine learning tool, a parts ordering department and diagnostic information to the customer via e-mail. Which AWS service can help us manage these integrations ?",
        "choices": ["A. Amazon Simple Notification Service (Amazon SNS) ", "B. Amazon Simple Queue Service (Amazon SQS)", "C. Amazon S3", "D. Amazon EBS"],
         "answer": "A. Amazon Simple Notification Service (Amazon SNS) ",
        "explanation": "Amazon SNS is well suited to send data to mulitple recipients and can send App to APP and App to People messages"
    },
    {
        "question": "What soultion does AWS for someone who wants a simplified cloud compute offering with limited complexity, so they can get up and running quickly ?",
        "choices": ["A. AWS Outposts", "B. Amazon Lightsail", "C. Amazon S3", "D. Amazon EC2 Image Builder"],
         "answer": "B. Amazon Lightsail",
        "explanation": "Amazon Lightsail is a simplified AWS offering that limits functionality in order to provide simplicity"
    },
    {
        "question": "What AWS service can help us set up a landing zone to manage and monitor our multi account enviroment ? ",
        "choices": ["A. AWS Compute Optimizer", "B. AWS License Manager", "C. AWS CloudFormation", "D. AWS Control Tower"],
         "answer": "D. AWS Control Tower",
        "explanation": "AWS Control Tower can help us set up a landing zone to manage and monitor our multi account enviroment"
    },
    {
        "question": "We have started to implement seperate AWS accounts for each one of our enviroments, but we want to ensure that we aren't running any analytics in our production enviroments. What can we use to prevent these services from running in our production AWS accounts ? ",
        "choices": ["A. AWS License Manager", "B. AMS Resource Access Manager (AWS RAM)", "C. AWS CloudFormation", "D. Service Control Polices"],
         "answer": "D. Service Control Polices",
        "explanation": "SCPS are used in AWS Organizations to control what services and actions are allowed or denied in member accounts. AWS RAM is used to share AWS reources between accounts but it does not provide the ability to enfore policies to prevent services from running."
    },
    {
        "question": "Which AWS Well architected framework pillar does experiement more ofter align with ?",
        "choices": ["A. Operational Excellence", "B. Security", "C. Reliability", "D. Peformance Effienciency"],
         "answer": "D. Peformance Effienciency",
        "explanation": "Experiment is most often attributed to Performance Effiency"
    },
    {
        "question": "We have a highly connected dataset. We would like to better understand the relationships between our data items. Which service is desgined to help us for this purpse ?",
        "choices": ["A. Amazon QLDB", "B. Amazon ElastiCache", "C. Amazon DynamoDB", "D. Amazon Neptune"],
         "answer": "D. Amazon Neptune",
        "explanation": "Amazon Neptune is a graph database that help us understand relationships between highly connected data"
    },
    {
        "question": "Which AWS service has a collector that can collect enviroment data to help provide insights and build out a business case ? ",
        "choices": ["A. AWS Budgets", "B. AWS Data Exports", "C. AWS Pricing Calualtor", "D. AWS Migration Evaluator"],
         "answer": "D. AWS Migration Evaluator",
        "explanation": "AWS Migration Evaluator will collect data on our enviroment, provide insights and help us build out a business case"
    },
    {
        "question": "What AWS feature can act as a guide rail for our AWS account and limit the maximum availble permissions at the root, OU, or child account level ?",
        "choices": ["A. AWS CloudFormation", "B. Service Control Policies", "C. AWS Compute Optimizer", "D. Resource Tags"],
         "answer": "B. Service Control Policies",
        "explanation": "SCP act as a guide rail for our AWS Accoun that determine the permissions made available on the root ,OU and child accounts"
    },
    {
        "question": "We have an established company in the cloud space and would like to branch into AWS. What AWS service can help us build and grow our AWS business",
        "choices": ["A. AWS re:POSt", "B. AWS Knowledge Center", "C. AWS Partner Central", "D. AWS IQ"],
         "answer": "C. AWS Partner Central",
        "explanation": "AWS Partner Central can help companies build and grow their AWS business"
    },
    {
        "question": "There are a large number of developers assigned to one of our projects, and we want to be able to give them access to the project without having to go to IAM . Is there an AWS Service that can do this ?",
        "choices": ["A. AWS CodeStar", "B. AWS Cloud9", "C. AWS CodePipeline", "D. AWS CodeDeploy"],
         "answer": "A. AWS CodeStar",
        "explanation": "AWS CodeStar can be used to manage team member access to development projects"
    },
    {
        "question": "What AWS Service is a fully managed SQL based cloud data warehouse",
        "choices": ["A. Amazon S3", "B. Amazon Athena", "C. Amazon Redshift", "D. Amazon Aurora"],
         "answer": "C. Amazon Redshift",
        "explanation": "Amazon Redshift is a fully managed SQL based cloud data warehouse"
    },
    {
        "question": "We want a service to manage our organizations approved software packages, that can be set up to auto update those packages from public repositories. What AWS service can do this ?",
        "choices": ["A. AWS CodeCompile", "B. AWS CodeBuild", "C. AWS CodeArtifact", "D. AWS Cloud 9"],
         "answer": "C. AWS CodeArtifact",
        "explanation": "AWS CodeArtifact is used to managed approved software packages and can be configured to auto update those packages from public repositories"
    },
    {
        "question": "Which AWS Well Architected Framework Pillar does undertand your impact align with ?",
        "choices": ["A. Reliability", "B. Sustainability", "C. Performance Effieciecy", "D. Security"],
         "answer": "B. Sustainability",
        "explanation": "Understand your impact is one of the desgin principles of the Sustainability Pillar"
    },
    {
        "question": "What can we use to protect an Amazon S3 object that we are required to retain to meet regulatory compliance ? ",
        "choices": ["A. Amazon S3 Access Logs", "B. Glacier", "C. Versioning", "D. Amazon S3 Object Lock"],
         "answer": "D. Amazon S3 Object Lock",
        "explanation": "We can use Amazon S3 Object lock to protect an Amazon S3 object that we are required to reatin"
    },
    {
        "question": "What can we use to grant interenet access to our private subnets",
        "choices": ["A. NACL", "B. Internet Gateway", "C. Nat Gateway", "D. Security Group"],
         "answer": "C. Nat Gateway",
        "explanation": "A NAT gateway is used to grant access to the internet to a private subnet"
    },
    {
        "question": "A Company operates a research station with little to no connectivity. They would like to keep a compute optimized device to run tasks without internet connectivity. What is the best AWS devuice to use for this ?",
        "choices": ["A. AWS CloudHSM", "B. AWS Snowmobile", "C. AWS Snowcone", "D. AWS Snowball"],
         "answer": "D. AWS Snowball",
        "explanation": "AWS Snowball is medium sized storage devie with onboard compute that can be optimized for storage or compute. AWS Snowball can be used in areas where there is limited or no connectivity"
    },
    {
        "question": "We have a startup idea and would like to build out the intial product on AWS. What AWS Service can help us with resources for our startup ?",
        "choices": ["A. AWS Activate", "B. AWS Marketplace", "C. AWS IQ", "D. AWS re:Post"],
         "answer": "A. AWS Activate",
        "explanation": "AWS Activate can help us with resources for our startups running on AWS"
    },
    {
        "question": "Which AWS Service can help us extend our VPCs into large population centers to help reduce latency?",
        "choices": ["A. Amazon Route 53", "B. AWS Global Accelerator", "C. AWS Local Zones", "D. Amazon CloudFront"],
         "answer": "C. AWS Local Zones",
        "explanation": "AWS Local Zones helps us put resources closer to the customers in large metro areas."
    },
    {
        "question": "What AWS Services can analyze our compute resources and help us identify resources that under or over provisioned",
        "choices": ["A. AWS RAM", "B. AWS Organizations", "C. AWS Compute Optimizer", "D. AWS Control Tower"],
         "answer": "C. AWS Compute Optimizer",
        "explanation": "AWS Compute Optimizer can analyzer our compute resources and help identify resources that are under or over provisioned"
    },
    {
        "question": "Our team wants to speed up the deployment cycle by using a service that can compile source code, run test and produce deployable software packages within AWS, What should they use ?",
        "choices": ["A. AWS CodePipeline", "B. AWS CodeBuild", "C. AWS CodeDeploy", "D. AWS Cloud9"],
         "answer": "B. AWS CodeBuild",
        "explanation": "AWS CodeBuild is a continous intergration service that can compile source codes, run tests and produce deployable software packages"
    },
    {
        "question": "A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud. Which activities related to a Snowball Edge device are available to the company at no cost?",
        "choices": ["A. Use of the Snowball Edge appliance for a 10-day period", "B.  The transfer of data out of Amazon S3 and to the Snowball Edge appliance", "C. The transfer of data from the Snowball Edge appliance into Amazon S3", "D. Daily use of the Snowball Edge appliance after 10 days"],
         "answer": "C. The transfer of data from the Snowball Edge appliance into Amazon S3",
        "explanation": "The activites for Snowball Edge that are available at not cost is the transfer of data into S3 because inbound data is never charged"
    },
    {
        "question": "A company has deployed applications on Amazon EC2 instances. The company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices. Which AWS service can the company use to meet these requirements?",
        "choices": ["A. AWS Trusted Advisor", "B. Amazon Inspector", "C. AWS Config", "D. Amazon GuardDuty"],
         "answer": "B. Amazon Inspector",
        "explanation": "Amazon Inspector is specifically designed to assess the security of applications deployed on Amazon EC2 instances. It identifies vulnerabilities and deviations from best practices, providing detailed findings that help improve the security posture of your applications."
    },
    {
        "question": "A company has a centralized group of users with large file storage requirements that have exceeded the space available on premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally. What is the MOST operationally efficient AWS solution for this scenario?",
        "choices": ["A.  Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility.", "B. Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway.", "C. Move each user’s working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user.", "D. Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume. Share the EBS volume directly with the users."],
         "answer": "B. Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway.",
        "explanation": "You would use to Storage Gateway to keep local storage along with sharing it everyone else"
    },
    {
        "question": "Which option is a perspective that includes foundational capabilities of the AWS Cloud Adoption Framework (AWS CAF)?",
        "choices": ["A. Sustainability", "B. Performance efficiency", "C. Governance ", "D. Reliability"],
         "answer": "C. Governance ",
        "explanation": "Governance is the perpestive that includes the foundational capabilites of AWS CAF"
    },
    {
        "question": "",
        "choices": ["A. ", "B. ", "C. ", "D. "],
         "answer": "",
        "explanation": ""
    },
    {
        "question": "",
        "choices": ["A. ", "B. ", "C. ", "D. "],
         "answer": "",
        "explanation": ""
    },






    
// Add More Questions
];

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length);
let randomQuestions = getRandomQuestions(20);

function getRandomQuestions(num) {
    let shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function displayQuestion(index) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    const question = randomQuestions[index];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
    
    const choicesUl = document.createElement('ul');
    choicesUl.classList.add('choices');
    question.choices.forEach((choice, choiceIndex) => {
        const choiceLi = document.createElement('li');
        choiceLi.innerHTML = `
            <label>
                <input type="radio" name="question${index}" value="${choice}" ${userAnswers[index] === choice ? 'checked' : ''}>
                ${choice}
            </label>
        `;
        choicesUl.appendChild(choiceLi);
    });

    questionDiv.appendChild(choicesUl);
    quizContainer.appendChild(questionDiv);
}

function nextQuestion() {
    if (currentQuestionIndex < randomQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
        document.getElementById('submitBtn').innerText = 'Submit Answer';
        document.getElementById('submitBtn').onclick = submitAnswer;
        document.getElementById('result').innerHTML = '';
    } else {
        submitQuiz();
    }
}

function saveAnswer() {
    const selectedAnswer = document.querySelector('input[name="question' + currentQuestionIndex + '"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestionIndex] = selectedAnswer.value;
    }
}

function submitAnswer() {
    saveAnswer();
    const quizContainer = document.getElementById('quiz');
    const selectedAnswer = document.querySelector('input[name="question' + currentQuestionIndex + '"]:checked');
    const question = randomQuestions[currentQuestionIndex];
    if (selectedAnswer) {
        const isCorrect = selectedAnswer.value === question.answer;
        const answerLabel = selectedAnswer.parentElement;
        answerLabel.classList.add(isCorrect ? 'correct' : 'incorrect');

        const explanationDiv = document.createElement('div');
        explanationDiv.classList.add('explanation');
        explanationDiv.innerText = question.explanation;
        quizContainer.appendChild(explanationDiv);

        document.getElementById('submitBtn').innerText = 'Next';
        document.getElementById('submitBtn').onclick = nextQuestion;
    } else {
        alert('Please select an answer before submitting.');
    }
}

function submitQuiz() {
    saveAnswer();
    let score = 0;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    randomQuestions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.answer;
        const questionResult = document.createElement('div');
        questionResult.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <p class="${isCorrect ? 'correct' : 'incorrect'}">
                Your answer: ${userAnswers[index] || 'No answer'}
            </p>
            <p class="explanation">${question.explanation}</p>
        `;
        resultDiv.appendChild(questionResult);
        if (isCorrect) {
            score++;
        }
    });

    const scoreDiv = document.createElement('div');
    scoreDiv.classList.add('result');
    scoreDiv.innerText = `You scored ${score} out of ${randomQuestions.length}.`;
    resultDiv.appendChild(scoreDiv);
}

window.onload = () => displayQuestion(currentQuestionIndex);
