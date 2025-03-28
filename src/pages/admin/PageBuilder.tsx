
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Layout, Globe, Monitor, Smartphone, Tablet, Edit, Eye, Trash, Code, Save } from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const PageBuilder = () => {
  const [activeDevice, setActiveDevice] = useState('desktop');
  
  // Mock pages data
  const pages = [
    { id: 1, title: 'Homepage', path: '/', lastEdited: '2024-03-03', status: 'published' },
    { id: 2, title: 'IMEI Services', path: '/services/imei', lastEdited: '2024-03-01', status: 'published' },
    { id: 3, title: 'Server Unlocks', path: '/services/server', lastEdited: '2024-02-25', status: 'published' },
    { id: 4, title: 'Remote Tools', path: '/services/remote', lastEdited: '2024-02-20', status: 'published' },
    { id: 5, title: 'File Downloads', path: '/services/files', lastEdited: '2024-02-18', status: 'published' },
    { id: 6, title: 'Contact Us', path: '/contact', lastEdited: '2024-03-02', status: 'draft' },
    { id: 7, title: 'About Us', path: '/about', lastEdited: '2024-02-15', status: 'published' },
  ];
  
  // Mock templates
  const templates = [
    { id: 1, name: 'Landing Page', preview: 'https://via.placeholder.com/300x200', category: 'Marketing' },
    { id: 2, name: 'Service Catalog', preview: 'https://via.placeholder.com/300x200', category: 'Services' },
    { id: 3, name: 'Dashboard', preview: 'https://via.placeholder.com/300x200', category: 'User' },
    { id: 4, name: 'Product Page', preview: 'https://via.placeholder.com/300x200', category: 'E-commerce' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Page Builder</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Page
        </Button>
      </div>
      
      <Tabs defaultValue="pages" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="editor">Editor</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pages" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Website Pages</CardTitle>
              <CardDescription>
                Manage and edit your website pages
              </CardDescription>
              <div className="mt-4 relative">
                <Input placeholder="Search pages..." />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {pages.map(page => (
                  <div key={page.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Layout className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h3 className="text-base font-medium">{page.title}</h3>
                        <p className="text-sm text-muted-foreground">{page.path}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        page.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {page.status}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        Last edited: {new Date(page.lastEdited).toLocaleDateString()}
                      </p>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Page Templates</CardTitle>
              <CardDescription>
                Select a template to start building your page
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {templates.map(template => (
                  <div key={template.id} className="border rounded-lg overflow-hidden">
                    <img 
                      src={template.preview} 
                      alt={template.name} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-medium">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.category}</p>
                      <Button className="mt-3 w-full" variant="outline">
                        Use Template
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="editor" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Homepage</CardTitle>
                  <CardDescription>
                    Edit your website homepage
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Code className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button size="sm">
                    <Save className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Button 
                  variant={activeDevice === 'mobile' ? 'default' : 'outline'} 
                  size="icon"
                  onClick={() => setActiveDevice('mobile')}
                >
                  <Smartphone className="h-4 w-4" />
                </Button>
                <Button 
                  variant={activeDevice === 'tablet' ? 'default' : 'outline'} 
                  size="icon"
                  onClick={() => setActiveDevice('tablet')}
                >
                  <Tablet className="h-4 w-4" />
                </Button>
                <Button 
                  variant={activeDevice === 'desktop' ? 'default' : 'outline'} 
                  size="icon"
                  onClick={() => setActiveDevice('desktop')}
                >
                  <Monitor className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className={`border rounded-lg p-2 mx-auto ${
                activeDevice === 'mobile' ? 'max-w-[320px]' : 
                activeDevice === 'tablet' ? 'max-w-[768px]' : 'max-w-full'
              }`}>
                <div className="bg-muted rounded-lg p-4 min-h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="h-12 w-12 mx-auto text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Page Editor</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Drag and drop components to build your page
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Components</CardTitle>
                <CardDescription>
                  Drag components onto the page
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['Header', 'Hero Section', 'Features', 'Services', 'Testimonials', 'Call to Action', 'Footer'].map((component, i) => (
                    <div key={i} className="border rounded-md p-3 cursor-grab flex items-center gap-3">
                      <Layout className="h-4 w-4 text-muted-foreground" />
                      <span>{component}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Properties</CardTitle>
                <CardDescription>
                  Edit selected component properties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Text</label>
                    <Input defaultValue="Ready to Transform Your GSM Business?" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Color</label>
                    <div className="flex gap-2 mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary" />
                      <div className="w-8 h-8 rounded-full bg-secondary" />
                      <div className="w-8 h-8 rounded-full bg-accent" />
                      <div className="w-8 h-8 rounded-full bg-destructive" />
                      <div className="w-8 h-8 rounded-full bg-muted" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Alignment</label>
                    <div className="flex gap-2 mt-1">
                      <Button variant="outline" size="sm">Left</Button>
                      <Button variant="outline" size="sm">Center</Button>
                      <Button variant="outline" size="sm">Right</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PageBuilder;
