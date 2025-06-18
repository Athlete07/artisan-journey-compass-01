
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight, ChevronLeft, Upload, Check, User, Briefcase, FileText, Camera, Award, Package } from 'lucide-react';

const ArtisanOnboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Business Type & Basic Information
    businessType: '',
    entityName: '',
    brandName: '',
    registrationNumber: '',
    incorporationDate: '',
    businessNature: '',
    
    // Contact Information
    contactPersonName: '',
    designation: '',
    primaryPhone: '',
    secondaryPhone: '',
    primaryEmail: '',
    secondaryEmail: '',
    websiteUrl: '',
    
    // Address Details
    registeredAddress: '',
    operationalAddress: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    
    // Legal & Compliance
    panNumber: '',
    gstNumber: '',
    udyamNumber: '',
    ieCode: '',
    fssaiLicenseNumber: '',
    iso9001Certificate: '',
    iso14001Certificate: '',
    iso45001Certificate: '',
    otherCertifications: '',
    
    // Banking Information
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    swiftCode: '',
    accountType: '',
    
    // Product & Manufacturing
    productCategories: [] as string[],
    primaryProducts: '',
    manufacturingCapacity: '',
    qualityStandards: [] as string[],
    productionFacilities: '',
    equipmentDetails: '',
    rawMaterialSources: '',
    
    // Export & International Trade
    exportExperience: '',
    exportCountries: [] as string[],
    exportTurnoverAmount: '',
    tradeAssociations: '',
    internationalCertifications: '',
    
    // Market Information
    targetMarkets: [] as string[],
    distributionChannels: [],
    competitiveAdvantages: '',
    sustainabilityPractices: '',
    
    // Team & Infrastructure
    totalEmployees: '',
    technicalTeam: '',
    qcTeam: '',
    salesTeam: '',
    rndCapability: '',
    digitalCapabilities: '',
    
    // Financial Information
    annualTurnover: '',
    exportTurnoverFinancial: '',
    workingCapital: '',
    creditRating: '',
    
    // Documents
    incorporationCertificate: null as File | null,
    panCard: null as File | null,
    gstCertificate: null as File | null,
    bankStatement: null as File | null,
    auditReport: null as File | null,
    productCatalog: null as File | null,
    qualityCertificates: [] as File[],
    facilityPhotos: [] as File[],
    productPhotos: [] as File[],
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const totalSteps = 7;

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Application Submitted Successfully",
      description: "Your business profile is under review. You'll receive an email within 48-72 hours with your verification status.",
    });
    navigate('/dashboard');
  };

  const businessTypes = [
    'Individual Artisan',
    'Micro Enterprise (up to ₹1 Cr)',
    'Small Enterprise (₹1-10 Cr)',
    'Medium Enterprise (₹10-50 Cr)',
    'Large Enterprise (₹50+ Cr)',
    'Cooperative Society',
    'Self Help Group',
    'Producer Company',
    'Private Limited Company',
    'Public Limited Company',
    'Partnership Firm',
    'Limited Liability Partnership'
  ];

  const productCategories = [
    'Textiles & Apparel',
    'Handicrafts & Handloom',
    'Jewelry & Gems',
    'Leather Products',
    'Food & Beverages',
    'Spices & Condiments',
    'Tea & Coffee',
    'Organic Products',
    'Ayurvedic & Herbal',
    'Cosmetics & Personal Care',
    'Home Decor & Furnishing',
    'Wooden Products',
    'Metal Crafts',
    'Ceramic & Pottery',
    'Carpets & Rugs',
    'Electronics & IT',
    'Automotive Parts',
    'Engineering Goods',
    'Chemicals & Pharmaceuticals',
    'Agricultural Products',
    'Marine Products',
    'Processed Foods',
    'Toys & Sports Goods',
    'Musical Instruments',
    'Art & Paintings'
  ];

  const qualityStandards = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'ISO 45001:2018',
    'HACCP',
    'BRC',
    'SQF',
    'FSSAI',
    'FDA',
    'CE Marking',
    'CPSIA',
    'REACH',
    'RoHS',
    'FairTrade',
    'GOTS',
    'OEKO-TEX',
    'GI Tag',
    'Hallmark',
    'BIS'
  ];

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Briefcase className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold">Business Information</h2>
              <p className="text-slate-600">Tell us about your business entity</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="businessType">Business Type *</Label>
                <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="entityName">Legal Entity Name *</Label>
                <Input
                  id="entityName"
                  value={formData.entityName}
                  onChange={(e) => handleInputChange('entityName', e.target.value)}
                  placeholder="As per registration documents"
                />
              </div>
              
              <div>
                <Label htmlFor="brandName">Brand/Trade Name</Label>
                <Input
                  id="brandName"
                  value={formData.brandName}
                  onChange={(e) => handleInputChange('brandName', e.target.value)}
                  placeholder="Your brand name"
                />
              </div>
              
              <div>
                <Label htmlFor="registrationNumber">Registration Number *</Label>
                <Input
                  id="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                  placeholder="CIN/Registration number"
                />
              </div>
              
              <div>
                <Label htmlFor="incorporationDate">Date of Incorporation *</Label>
                <Input
                  id="incorporationDate"
                  type="date"
                  value={formData.incorporationDate}
                  onChange={(e) => handleInputChange('incorporationDate', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="businessNature">Nature of Business *</Label>
                <Select value={formData.businessNature} onValueChange={(value) => handleInputChange('businessNature', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select business nature" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manufacturer">Manufacturer</SelectItem>
                    <SelectItem value="trader">Trader</SelectItem>
                    <SelectItem value="exporter">Exporter</SelectItem>
                    <SelectItem value="importer">Importer</SelectItem>
                    <SelectItem value="service-provider">Service Provider</SelectItem>
                    <SelectItem value="retailer">Retailer</SelectItem>
                    <SelectItem value="wholesaler">Wholesaler</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contactPersonName">Contact Person Name *</Label>
                <Input
                  id="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={(e) => handleInputChange('contactPersonName', e.target.value)}
                  placeholder="Primary contact person"
                />
              </div>
              
              <div>
                <Label htmlFor="designation">Designation *</Label>
                <Input
                  id="designation"
                  value={formData.designation}
                  onChange={(e) => handleInputChange('designation', e.target.value)}
                  placeholder="CEO, MD, Owner, etc."
                />
              </div>
              
              <div>
                <Label htmlFor="primaryEmail">Primary Email *</Label>
                <Input
                  id="primaryEmail"
                  type="email"
                  value={formData.primaryEmail}
                  onChange={(e) => handleInputChange('primaryEmail', e.target.value)}
                  placeholder="business@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="primaryPhone">Primary Phone *</Label>
                <Input
                  id="primaryPhone"
                  value={formData.primaryPhone}
                  onChange={(e) => handleInputChange('primaryPhone', e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <FileText className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold">Address & Legal Details</h2>
              <p className="text-slate-600">Business address and legal compliance information</p>
            </div>
            
            <div>
              <Label htmlFor="registeredAddress">Registered Address *</Label>
              <Textarea
                id="registeredAddress"
                value={formData.registeredAddress}
                onChange={(e) => handleInputChange('registeredAddress', e.target.value)}
                placeholder="Complete registered address as per documents"
                rows={3}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="sameAddress"
                onChange={(e) => {
                  if (e.target.checked) {
                    handleInputChange('operationalAddress', formData.registeredAddress);
                  }
                }}
              />
              <Label htmlFor="sameAddress">Operational address same as registered address</Label>
            </div>
            
            <div>
              <Label htmlFor="operationalAddress">Operational Address *</Label>
              <Textarea
                id="operationalAddress"
                value={formData.operationalAddress}
                onChange={(e) => handleInputChange('operationalAddress', e.target.value)}
                placeholder="Complete operational address"
                rows={3}
              />
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="country">Country *</Label>
                <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="state">State/Province *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  placeholder="State or province"
                />
              </div>
              
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="City name"
                />
              </div>
              
              <div>
                <Label htmlFor="pincode">Postal Code *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                  placeholder="Postal/ZIP code"
                />
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">Legal Compliance Documents</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="panNumber">PAN Number *</Label>
                  <Input
                    id="panNumber"
                    value={formData.panNumber}
                    onChange={(e) => handleInputChange('panNumber', e.target.value)}
                    placeholder="10-character PAN"
                  />
                </div>
                
                <div>
                  <Label htmlFor="gstNumber">GST Number</Label>
                  <Input
                    id="gstNumber"
                    value={formData.gstNumber}
                    onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                    placeholder="15-character GSTIN"
                  />
                </div>
                
                <div>
                  <Label htmlFor="udyamNumber">Udyam Registration</Label>
                  <Input
                    id="udyamNumber"
                    value={formData.udyamNumber}
                    onChange={(e) => handleInputChange('udyamNumber', e.target.value)}
                    placeholder="UDYAM-XX-XX-XXXXXXX"
                  />
                </div>
                
                <div>
                  <Label htmlFor="ieCode">IEC Code</Label>
                  <Input
                    id="ieCode"
                    value={formData.ieCode}
                    onChange={(e) => handleInputChange('ieCode', e.target.value)}
                    placeholder="10-digit IEC code"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Package className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold">Products & Manufacturing</h2>
              <p className="text-slate-600">Details about your products and production capabilities</p>
            </div>
            
            <div>
              <Label>Product Categories *</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 max-h-48 overflow-y-auto">
                {productCategories.map((category) => (
                  <label key={category} className="flex items-center space-x-2 p-2 border rounded hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={formData.productCategories.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('productCategories', [...formData.productCategories, category]);
                        } else {
                          handleInputChange('productCategories', formData.productCategories.filter(c => c !== category));
                        }
                      }}
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="primaryProducts">Primary Products *</Label>
              <Textarea
                id="primaryProducts"
                value={formData.primaryProducts}
                onChange={(e) => handleInputChange('primaryProducts', e.target.value)}
                placeholder="Describe your main products, specifications, and variants"
                rows={4}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="manufacturingCapacity">Manufacturing Capacity *</Label>
                <Textarea
                  id="manufacturingCapacity"
                  value={formData.manufacturingCapacity}
                  onChange={(e) => handleInputChange('manufacturingCapacity', e.target.value)}
                  placeholder="Monthly/Annual production capacity"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="productionFacilities">Production Facilities</Label>
                <Textarea
                  id="productionFacilities"
                  value={formData.productionFacilities}
                  onChange={(e) => handleInputChange('productionFacilities', e.target.value)}
                  placeholder="Details about your manufacturing facilities"
                  rows={3}
                />
              </div>
            </div>
            
            <div>
              <Label>Quality Standards & Certifications</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                {qualityStandards.map((standard) => (
                  <label key={standard} className="flex items-center space-x-2 p-2 border rounded hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={formData.qualityStandards.includes(standard)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('qualityStandards', [...formData.qualityStandards, standard]);
                        } else {
                          handleInputChange('qualityStandards', formData.qualityStandards.filter(s => s !== standard));
                        }
                      }}
                    />
                    <span className="text-sm">{standard}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="rawMaterialSources">Raw Material Sources</Label>
              <Textarea
                id="rawMaterialSources"
                value={formData.rawMaterialSources}
                onChange={(e) => handleInputChange('rawMaterialSources', e.target.value)}
                placeholder="Sources of raw materials, suppliers, sustainability practices"
                rows={3}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Award className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold">Export & International Trade</h2>
              <p className="text-slate-600">Your international business experience and capabilities</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="exportExperience">Export Experience</Label>
                <Select value={formData.exportExperience} onValueChange={(value) => handleInputChange('exportExperience', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Years of export experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New to Export</SelectItem>
                    <SelectItem value="1-2">1-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="exportTurnover">Annual Export Turnover (USD)</Label>
                <Select value={formData.exportTurnover} onValueChange={(value) => handleInputChange('exportTurnover', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">No exports yet</SelectItem>
                    <SelectItem value="1-50k">$1K - $50K</SelectItem>
                    <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                    <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                    <SelectItem value="5m+">$5M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label>Export Countries (Current/Target)</Label>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                {['USA', 'UK', 'Germany', 'France', 'Italy', 'Japan', 'Australia', 'Canada', 'UAE', 'Saudi Arabia', 'Singapore', 'Netherlands', 'Spain', 'South Korea', 'Other'].map((country) => (
                  <label key={country} className="flex items-center space-x-2 p-2 border rounded hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={formData.exportCountries.includes(country)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('exportCountries', [...formData.exportCountries, country]);
                        } else {
                          handleInputChange('exportCountries', formData.exportCountries.filter(c => c !== country));
                        }
                      }}
                    />
                    <span className="text-sm">{country}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tradeAssociations">Trade Associations/Memberships</Label>
                <Textarea
                  id="tradeAssociations"
                  value={formData.tradeAssociations}
                  onChange={(e) => handleInputChange('tradeAssociations', e.target.value)}
                  placeholder="List memberships in trade bodies, chambers of commerce"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="internationalCertifications">International Certifications</Label>
                <Textarea
                  id="internationalCertifications"
                  value={formData.internationalCertifications}
                  onChange={(e) => handleInputChange('internationalCertifications', e.target.value)}
                  placeholder="FDA, CE, FCC, CPSIA, etc."
                  rows={3}
                />
              </div>
            </div>
            
            <div>
              <Label>Target Markets</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                {['B2B Wholesale', 'B2C Retail', 'E-commerce Platforms', 'Government Contracts', 'Institutional Sales', 'Private Label/OEM'].map((market) => (
                  <label key={market} className="flex items-center space-x-2 p-2 border rounded hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={formData.targetMarkets.includes(market)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('targetMarkets', [...formData.targetMarkets, market]);
                        } else {
                          handleInputChange('targetMarkets', formData.targetMarkets.filter(m => m !== market));
                        }
                      }}
                    />
                    <span className="text-sm">{market}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold">Team & Infrastructure</h2>
              <p className="text-slate-600">Your organizational capabilities and resources</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="totalEmployees">Total Employees</Label>
                <Select value={formData.totalEmployees} onValueChange={(value) => handleInputChange('totalEmployees', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5</SelectItem>
                    <SelectItem value="6-20">6-20</SelectItem>
                    <SelectItem value="21-50">21-50</SelectItem>
                    <SelectItem value="51-100">51-100</SelectItem>
                    <SelectItem value="101-250">101-250</SelectItem>
                    <SelectItem value="250+">250+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="technicalTeam">Technical Team Size</Label>
                <Input
                  id="technicalTeam"
                  value={formData.technicalTeam}
                  onChange={(e) => handleInputChange('technicalTeam', e.target.value)}
                  placeholder="Number of technical staff"
                />
              </div>
              
              <div>
                <Label htmlFor="qcTeam">Quality Control Team</Label>
                <Input
                  id="qcTeam"
                  value={formData.qcTeam}
                  onChange={(e) => handleInputChange('qcTeam', e.target.value)}
                  placeholder="QC team size"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="rndCapability">R&D Capabilities</Label>
                <Textarea
                  id="rndCapability"
                  value={formData.rndCapability}
                  onChange={(e) => handleInputChange('rndCapability', e.target.value)}
                  placeholder="Research & Development capabilities, innovation projects"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="digitalCapabilities">Digital Capabilities</Label>
                <Textarea
                  id="digitalCapabilities"
                  value={formData.digitalCapabilities}
                  onChange={(e) => handleInputChange('digitalCapabilities', e.target.value)}
                  placeholder="ERP systems, digital marketing, e-commerce experience"
                  rows={3}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="sustainabilityPractices">Sustainability Practices</Label>
              <Textarea
                id="sustainabilityPractices"
                value={formData.sustainabilityPractices}
                onChange={(e) => handleInputChange('sustainabilityPractices', e.target.value)}
                placeholder="Environmental initiatives, social responsibility, ethical practices"
                rows={4}
              />
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-4">Financial Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="annualTurnover">Annual Turnover (INR)</Label>
                  <Select value={formData.annualTurnover} onValueChange={(value) => handleInputChange('annualTurnover', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<1cr">Less than ₹1 Cr</SelectItem>
                      <SelectItem value="1-5cr">₹1-5 Cr</SelectItem>
                      <SelectItem value="5-25cr">₹5-25 Cr</SelectItem>
                      <SelectItem value="25-100cr">₹25-100 Cr</SelectItem>
                      <SelectItem value="100cr+">₹100+ Cr</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="creditRating">Credit Rating</Label>
                  <Input
                    id="creditRating"
                    value={formData.creditRating}
                    onChange={(e) => handleInputChange('creditRating', e.target.value)}
                    placeholder="CRISIL/ICRA rating if available"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <FileText className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold">Banking & Financial Details</h2>
              <p className="text-slate-600">Banking information for transactions and payments</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-4">Primary Banking Details *</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="bankName">Bank Name *</Label>
                  <Input
                    id="bankName"
                    value={formData.bankName}
                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                    placeholder="Name of your bank"
                  />
                </div>
                
                <div>
                  <Label htmlFor="accountNumber">Account Number *</Label>
                  <Input
                    id="accountNumber"
                    value={formData.accountNumber}
                    onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                    placeholder="Bank account number"
                  />
                </div>
                
                <div>
                  <Label htmlFor="ifscCode">IFSC Code *</Label>
                  <Input
                    id="ifscCode"
                    value={formData.ifscCode}
                    onChange={(e) => handleInputChange('ifscCode', e.target.value)}
                    placeholder="11-character IFSC code"
                    maxLength={11}
                  />
                </div>
                
                <div>
                  <Label htmlFor="swiftCode">SWIFT Code</Label>
                  <Input
                    id="swiftCode"
                    value={formData.swiftCode}
                    onChange={(e) => handleInputChange('swiftCode', e.target.value)}
                    placeholder="For international transactions"
                  />
                </div>
                
                <div>
                  <Label htmlFor="accountType">Account Type *</Label>
                  <Select value={formData.accountType} onValueChange={(value) => handleInputChange('accountType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current">Current Account</SelectItem>
                      <SelectItem value="savings">Savings Account</SelectItem>
                      <SelectItem value="cc-od">CC/OD Account</SelectItem>
                      <SelectItem value="escrow">Escrow Account</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="secondaryEmail">Secondary Email</Label>
                <Input
                  id="secondaryEmail"
                  type="email"
                  value={formData.secondaryEmail}
                  onChange={(e) => handleInputChange('secondaryEmail', e.target.value)}
                  placeholder="Alternate email for notifications"
                />
              </div>
              
              <div>
                <Label htmlFor="websiteUrl">Website URL</Label>
                <Input
                  id="websiteUrl"
                  type="url"
                  value={formData.websiteUrl}
                  onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="competitiveAdvantages">Competitive Advantages</Label>
              <Textarea
                id="competitiveAdvantages"
                value={formData.competitiveAdvantages}
                onChange={(e) => handleInputChange('competitiveAdvantages', e.target.value)}
                placeholder="What makes your business unique? Key differentiators, USPs"
                rows={4}
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Camera className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold">Document Upload</h2>
              <p className="text-slate-600">Upload required business documents and certificates</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { key: 'incorporationCertificate', label: 'Incorporation Certificate *', required: true },
                { key: 'panCard', label: 'PAN Card *', required: true },
                { key: 'gstCertificate', label: 'GST Certificate', required: false },
                { key: 'bankStatement', label: 'Bank Statement *', required: true },
                { key: 'auditReport', label: 'Latest Audit Report', required: false },
                { key: 'productCatalog', label: 'Product Catalog *', required: true },
              ].map((doc) => (
                <div key={doc.key} className="p-4 border-2 border-dashed border-slate-300 rounded-lg hover:border-purple-400 transition-colors">
                  <div className="text-center">
                    <Upload className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                    <Label className="text-sm font-medium">{doc.label}</Label>
                    <input
                      type="file"
                      className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                      onChange={(e) => handleFileUpload(doc.key, e.target.files?.[0] || null)}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    <p className="text-xs text-slate-500 mt-1">PDF, JPG, PNG (Max 10MB)</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg hover:border-purple-400 transition-colors">
                <div className="text-center">
                  <Camera className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                  <Label className="text-sm font-medium">Quality Certificates</Label>
                  <input
                    type="file"
                    multiple
                    className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      handleInputChange('qualityCertificates', files);
                    }}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <p className="text-xs text-slate-500 mt-1">ISO, BIS, FDA, CE certificates</p>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg hover:border-purple-400 transition-colors">
                <div className="text-center">
                  <Camera className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                  <Label className="text-sm font-medium">Product Photos *</Label>
                  <input
                    type="file"
                    multiple
                    className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      handleInputChange('productPhotos', files);
                    }}
                    accept=".jpg,.jpeg,.png"
                  />
                  <p className="text-xs text-slate-500 mt-1">High-quality product images</p>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg hover:border-purple-400 transition-colors">
                <div className="text-center">
                  <Camera className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                  <Label className="text-sm font-medium">Facility Photos</Label>
                  <input
                    type="file"
                    multiple
                    className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      handleInputChange('facilityPhotos', files);
                    }}
                    accept=".jpg,.jpeg,.png"
                  />
                  <p className="text-xs text-slate-500 mt-1">Manufacturing facility images</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">Verification Process:</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Document verification: 24-48 hours</li>
                <li>• Business verification: 3-5 business days</li>
                <li>• Quality assessment: 5-7 business days</li>
                <li>• Final approval: 7-10 business days</li>
                <li>• You'll receive regular updates via email and SMS</li>
                <li>• Dedicated relationship manager will be assigned</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Business Onboarding
            </CardTitle>
            <p className="text-slate-600">Join our global marketplace and expand your business reach</p>
            
            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div key={i} className={`flex items-center ${i < totalSteps - 1 ? 'flex-1' : ''}`}>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step > i + 1
                          ? 'bg-green-500 text-white'
                          : step === i + 1
                          ? 'bg-purple-500 text-white'
                          : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      {step > i + 1 ? <Check className="w-4 h-4" /> : i + 1}
                    </div>
                    {i < totalSteps - 1 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          step > i + 1 ? 'bg-green-500' : 'bg-slate-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-500 text-center">
                Step {step} of {totalSteps}
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {renderStepContent()}
            
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={step === 1}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>
              
              {step < totalSteps ? (
                <Button
                  onClick={handleNext}
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                >
                  <span>Submit Application</span>
                  <Check className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArtisanOnboarding;
