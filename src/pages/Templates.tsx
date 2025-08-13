import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Code, Image, CheckCircle, AlertTriangle } from 'lucide-react';

const Templates = () => {
  const templates = [
    {
      name: "IEEE LaTeX Template",
      description: "Official IEEE conference template for LaTeX users",
      format: "LaTeX",
      size: "700 KB",
      lastUpdated: "2024",
      recommended: true,
      filePath: "/conference-latex-template_10-17-19.zip",
      features: [
        "Automatic formatting",
        "Bibliography management",
        "Figure and table templates",
        "Cross-reference support"
      ]
    },
    {
      name: "IEEE Word Template",
      description: "Microsoft Word template with IEEE formatting",
      format: "DOCX",
      size: "300 KB",
      lastUpdated: "2024",
      recommended: false,
      filePath: "/conference-template-a4.docx",
      features: [
        "Pre-formatted styles",
        "Header and footer setup",
        "Reference formatting",
        "Easy to use interface"
      ]
    },
    
  ];

  const supplementaryMaterials = [
    {
      name: "Formatting Guidelines",
      description: "Comprehensive guide for paper formatting",
      type: "PDF",
      size: "3.1 MB",
      icon: FileText
    },
    {
      name: "Figure Preparation Guide",
      description: "Best practices for figures and illustrations",
      type: "PDF",
      size: "1.8 MB",
      icon: Image
    },
    {
      name: "LaTeX Quick Start",
      description: "Getting started with LaTeX for beginners",
      type: "PDF",
      size: "2.2 MB",
      icon: Code
    },
    {
      name: "Bibliography Examples",
      description: "Reference formatting examples and BibTeX samples",
      type: "ZIP",
      size: "0.5 MB",
      icon: FileText
    }
  ];

  const guidelines = [
    {
      category: "Paper Structure",
      items: [
        "Title should be concise and descriptive",
        "Abstract: 150-200 words maximum",
        "Introduction should clearly state the problem",
        "Related work section is recommended",
        "Methodology must be clearly explained",
        "Results should include proper analysis",
        "Conclusion should summarize contributions"
      ]
    },
    {
      category: "Formatting Requirements",
      items: [
        "Two-column format (except title and abstract)",
        "Times New Roman, 10pt font for body text",
        "Single line spacing",
        "0.75 inch margins on all sides",
        "No page numbers (added automatically)",
        "No headers or footers",
        "Maximum 6 pages for regular papers"
      ]
    },
    {
      category: "Figures and Tables",
      items: [
        "High resolution (300 DPI minimum)",
        "Clear and readable in grayscale",
        "Captions below figures, above tables",
        "Figures and tables numbered sequentially",
        "Referenced in text before appearance",
        "Avoid color-only distinctions",
        "Use vector graphics when possible"
      ]
    },
    {
      category: "References",
      items: [
        "IEEE citation style required",
        "Minimum 15 references recommended",
        "Include recent and relevant papers",
        "DOI numbers when available",
        "Complete author names and affiliations",
        "Proper journal/conference abbreviations",
        "Check all URLs for accessibility"
      ]
    }
  ];

  const commonMistakes = [
    "Using incorrect font sizes or types",
    "Exceeding the page limit",
    "Poor quality figures or images",
    "Incomplete or incorrect references",
    "Missing author information",
    "Improper equation formatting",
    "Not following IEEE citation style",
    "Including page numbers or headers"
  ];

  const handleDownload = (filePath: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Paper Templates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Download official IEEE templates and formatting guidelines for your STESI 2026 paper submission. Ensure your paper meets all requirements for successful publication.
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              IEEE Conference Format Required
            </Badge>
            {/* add a hyperlink with button to the official IEEE website */}
            <Button variant="outline" className="text-primary mt-4" asChild>
              <a href="https://www.ieee.org/conferences/publishing/templates" target="_blank" rel="noopener noreferrer">
                IEEE Author Center
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Templates Download */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Download Templates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the template that best suits your writing environment. All templates are IEEE-compliant and regularly updated.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {templates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {template.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
                      Recommended
                    </Badge>
                  </div>
                )}
                <Card className={`h-full ${template.recommended ? 'border-primary shadow-lg' : 'border-border/50'} bg-gradient-card transition-all duration-300 hover:shadow-lg`}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{template.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">{template.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Format:</span>
                      <Badge variant="outline">{template.format}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Size:</span>
                      <span>{template.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Updated:</span>
                      <span>{template.lastUpdated}</span>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {template.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      className="w-full" 
                      variant={template.recommended ? "default" : "outline"}
                      onClick={() => handleDownload(template.filePath, template.name)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Template
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplementary Materials */}
      {/* <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Supplementary Materials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Additional resources to help you create a high-quality paper that meets IEEE standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supplementaryMaterials.map((material, index) => {
              const IconComponent = material.icon;
              return (
                <motion.div
                  key={material.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader className="text-center">
                      <IconComponent className="h-12 w-12 mx-auto text-primary mb-4" />
                      <CardTitle className="text-lg">{material.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <p className="text-muted-foreground text-sm">{material.description}</p>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{material.type}</span>
                        <span>{material.size}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="h-3 w-3 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Formatting Guidelines */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Formatting Guidelines</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed requirements for each section of your paper to ensure IEEE compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guidelines.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-card border border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Common Mistakes */}
      {/* <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Common Mistakes to Avoid</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn from common formatting errors to ensure your paper is accepted without revision requests.
            </p>
          </motion.div>

          <Card className="bg-gradient-card border border-border/50 shadow-card">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
                <CardTitle className="text-xl">Avoid These Mistakes</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonMistakes.map((mistake, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                    <span className="text-sm">{mistake}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Help and Support */}
      {/* <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Need Help with Templates?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our technical support team is available to help with template usage and formatting questions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-medium">Template Support</p>
                <p className="text-muted-foreground text-sm">templates@isssc2025.org</p>
              </div>
              <div>
                <p className="font-medium">LaTeX Help</p>
                <p className="text-muted-foreground text-sm">latex-help@isssc2025.org</p>
              </div>
              <div>
                <p className="font-medium">Formatting Questions</p>
                <p className="text-muted-foreground text-sm">formatting@isssc2025.org</p>
              </div>
            </div>
            <div className="mt-8 space-y-2">
              <Button className="mx-2">
                <FileText className="h-4 w-4 mr-2" />
                View Sample Paper
              </Button>
              <Button variant="outline" className="mx-2">
                <Download className="h-4 w-4 mr-2" />
                Download All Templates
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Templates;