<script src="https://cdn.jsdelivr.net/npm/appwrite@13.0.0"></script>

<script>
const client = new Appwrite.Client();

client
.setEndpoint('https://cloud.appwrite.io/v1') // Appwrite endpoint
.setProject('697f91d90010598bb1b4')          // Your project ID
.setKey('standard_f53296d79b7c96d4b6be52292d55e3cbd75dd6493d0c91a0c36ef2a2a474a8542f52064b73416f5d676ba336727ccfee39f7c7a8f6d32d9b78d744eef0a0bf5da9707f8ac25ca9a23f3514283c08be0b298ac193b92eb151c5ada38e6c51b420dcd4edcd6c98e61c0bd24d9e48a5e30d8f82e640129c95e90357568d3ee39a90');                // API Key we just created

const account = new Appwrite.Account(client);
const databases = new Appwrite.Databases(client);
</script>
