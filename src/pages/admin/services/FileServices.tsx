
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Upload, Download, FileDown, Smartphone } from 'lucide-react';
import { useFileServices } from '@/hooks/useFileServices';

const FileServices = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { services, isLoading } = useFileServices();
  
  // Mock file services
  const fileServices = [
    { id: 1, name: 'iPhone Firmware Package', type: 'firmware', size: '4.2 GB', downloads: 1243, price: 15.00, status: 'active' },
    { id: 2, name: 'Samsung Unlock Bin File', type: 'unlock', size: '256 MB', downloads: 876, price: 12.00, status: 'active' },
    { id: 3, name: 'Android ADB Toolkit', type: 'tool', size: '125 MB', downloads: 2456, price: 10.00, status: 'active' },
    { id: 4, name: 'Nokia Flash Package', type: 'firmware', size: '1.8 GB', downloads: 542, price: 18.00, status: 'active' },
    { id: 5, name: 'IMEI Repair Tool', type: 'tool', size: '85 MB', downloads: 1876, price: 25.00, status: 'maintenance' }
  ];
  
  const filteredFiles = fileServices.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    file.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const fileCategories = [
    { name: 'Firmware', count: fileServices.filter(f => f.type === 'firmware').length, icon: Smartphone },
    { name: 'Unlock Files', count: fileServices.filter(f => f.type === 'unlock').length, icon: FileDown },
    { name: 'Tools', count: fileServices.filter(f => f.type === 'tool').length, icon: Download }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">File Download Services</h2>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload New File
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {fileCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{category.name}</CardTitle>
              <category.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{category.count}</div>
              <p className="text-xs text-muted-foreground">
                Available files
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Available Files</CardTitle>
          <CardDescription>
            Manage downloadable files and tools
          </CardDescription>
          <div className="mt-4 relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search files by name or type..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>File Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-4">
                    Loading files...
                  </TableCell>
                </TableRow>
              ) : filteredFiles.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-4">
                    No files found matching your search
                  </TableCell>
                </TableRow>
              ) : (
                filteredFiles.map((file) => (
                  <TableRow key={file.id}>
                    <TableCell className="font-medium">{file.id}</TableCell>
                    <TableCell>{file.name}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        file.type === 'firmware' ? 'bg-blue-100 text-blue-800' :
                        file.type === 'unlock' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {file.type}
                      </span>
                    </TableCell>
                    <TableCell>{file.size}</TableCell>
                    <TableCell>{file.downloads}</TableCell>
                    <TableCell>${file.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        file.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {file.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Downloads</CardTitle>
          <CardDescription>
            Track recent file downloads
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>File</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Payment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Mock data for downloads */}
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">user{1000 + Math.floor(Math.random() * 9000)}@example.com</TableCell>
                  <TableCell>{fileServices[Math.floor(Math.random() * fileServices.length)].name}</TableCell>
                  <TableCell>{new Date(Date.now() - i * 86400000).toLocaleDateString()}</TableCell>
                  <TableCell>192.168.{Math.floor(Math.random() * 255)}.{Math.floor(Math.random() * 255)}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      Paid
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default FileServices;
