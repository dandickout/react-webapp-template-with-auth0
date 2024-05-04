

# Define variables
$localBuildPath = "path/to/your/build"
$ec2InstanceIp = "your-ec2-instance-ip"
$keyPath = "path/to/your/key.pem"
$remotePath = "path/to/your/remote/directory"

# Step 1: Build your application
Write-Host "Building application..."
npm run build

# Step 2: Archive the built application
Write-Host "Archiving application..."
Compress-Archive -Path $localBuildPath -DestinationPath "build.zip" -Force

# Step 3: Transfer the archive to your EC2 instance
Write-Host "Transferring archive to EC2 instance..."
scp -i $keyPath build.zip ubuntu@${ec2InstanceIp}:${remotePath}

# Step 4: Unarchive the application on your EC2 instance and restart Nginx
Write-Host "Unarchiving application and restarting Nginx..."
$sshCommand = @"
sudo chown -R ubuntu:ubuntu /www
sudo chmod -R 755 /www
unzip -o /home/ubuntu/www/build.zip -d /www
sudo systemctl restart nginx
"@
ssh -i $keyPath ubuntu@$ec2InstanceIp $sshCommand

# Step 5: Clean up
Write-Host "Cleaning up..."
Remove-Item build.zip


Write-Host "Deployment complete!"