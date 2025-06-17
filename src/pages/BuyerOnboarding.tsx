
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight, ChevronLeft, Upload, Check, Building, CreditCard, Globe, Shield, Plane } from 'lucide-react';

const BuyerOnboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    companyType: '',
    registrationNumber: '',
    vatNumber: '',
    taxId: '',
    incorporationDate: '',
    businessAddress: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
    phone: '',
    email: '',
    website: '',
    dunsNumber: '',
    
    // International Trade Information
    primaryMarkets: [] as string[],
    sourceCountries: [] as string[],
    tradingExperience: '',
    annualImportValue: '',
    preferredIncoterms: [] as string[],
    currencyPreferences: [] as string[],
    timeZone: '',
    businessLanguages: [] as string[],
    
    // Contact Person Details
    contactPersonName: '',
    designation: '',
    contactEmail: '',
    contactPhone: '',
    alternateContactName: '',
    alternateEmail: '',
    alternatePhone: '',
    
    // Business Profile & Compliance
    businessCategory: '',
    productCategories: [] as string[],
    annualTurnover: '',
    employeeCount: '',
    yearsInBusiness: '',
    targetMarkets: [] as string[],
    preferredSuppliers: '',
    qualityCertifications: '',
    complianceStandards: [] as string[],
    sustainabilityRequirements: '',
    
    // International Trade & Licensing
    importLicense: '',
    exportLicense: '',
    ieCode: '',
    eoriNumber: '',
    customsRegistration: '',
    freightForwarder: '',
    customsBroker: '',
    bankingPartner: '',
    creditRating: '',
    paymentTermsPreference: '',
    letterOfCreditBank: '',
    tradeFinanceLimit: '',
    
    // Regulatory Compliance
    regulatoryLicenses: '',
    productCertifications: [] as string[],
    restrictedProducts: '',
    sanctionsCompliance: '',
    amlKycCompliance: '',
    
    // Documents
    incorporationCertificate: null as File | null,
    taxCertificate: null as File | null,
    bankStatement: null as File | null,
    tradeLicense: null as File | null,
    importLicense: null as File | null,
    financialStatements: null as File | null,
    complianceCertificates: null as File | null,
    dunsReport: null as File | null,
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const totalSteps = 6;

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
      title: "International Buyer Application Submitted",
      description: "Your global buyer onboarding application is under review. Our international compliance team will contact you within 48-72 hours.",
    });
    navigate('/dashboard');
  };

  const companyTypes = [
    'Corporation/Ltd Company',
    'Public Limited Company',
    'Partnership',
    'Limited Liability Company (LLC)',
    'Sole Proprietorship',
    'Government Entity',
    'Multinational Corporation',
    'Trading House',
    'Cooperative',
    'Joint Venture'
  ];

  const businessCategories = [
    'International Retailer',
    'Global Wholesaler',
    'Distribution Company',
    'Import Trading House',
    'E-commerce Marketplace',
    'Department Store Chain',
    'Specialty Store Chain',
    'Corporate Procurement',
    'Government Procurement',
    'Brand Manufacturer',
    'Private Label Company'
  ];

  const productCategories = [
    'Textiles & Apparel',
    'Handicrafts & Artworks',
    'Jewelry & Precious Items',
    'Home Decor & Furnishing',
    'Furniture & Woodwork',
    'Leather Goods & Accessories',
    'Spices & Food Products',
    'Ayurvedic & Wellness Products',
    'Carpets & Rugs',
    'Metalwork & Brass Items',
    'Ceramics & Pottery',
    'Organic & Natural Products'
  ];

  const countries = [
    'United States', 'United Kingdom', 'Germany', 'France', 'Canada', 'Australia',
    'Netherlands', 'Italy', 'Spain', 'Belgium', 'Switzerland', 'Sweden',
    'Norway', 'Denmark', 'Japan', 'South Korea', 'Singapore', 'UAE',
    'Saudi Arabia', 'Brazil', 'Mexico', 'South Africa', 'New Zealand'
  ];

  const incoterms = [
    'FOB (Free On Board)',
    'CIF (Cost, Insurance & Freight)',
    'CFR (Cost & Freight)',
    'EXW (Ex Works)',
    'FCA (Free Carrier)',
    'CPT (Carriage Paid To)',
    'CIP (Carriage & Insurance Paid)',
    'DAP (Delivered At Place)',
    'DPU (Delivered At Place Unloaded)',
    'DDP (Delivered Duty Paid)'
  ];

  const currencies = [
    'USD - US Dollar',
    'EUR - Euro',
    'GBP - British Pound',
    'CAD - Canadian Dollar',
    'AUD - Australian Dollar',
    'JPY - Japanese Yen',
    'CHF - Swiss Franc',
    'SEK - Swedish Krona',
    'NOK - Norwegian Krone',
    'SGD - Singapore Dollar'
  ];

  const complianceStandards = [
    'ISO 9001 (Quality Management)',
    'ISO 14001 (Environmental)',
    'OEKO-TEX Standards',
    'GOTS (Global Organic Textile)',
    'Fair Trade Certified',
    'BSCI (Business Social Compliance)',
    'WRAP (Worldwide Responsible Apparel)',
    'CE Marking (European Conformity)',
    'FDA Compliance',
    'REACH Compliance (EU Chemical)'
  ];

  const productCertifications = [
    'CE Marking', 'FDA Approval', 'CPSIA Compliance', 'REACH Compliance',
    'RoHS Compliance', 'FCC Certification', 'UL Listing', 'CSA Certification',
    'JIS Standards', 'BIS Certification', 'ISI Mark', 'Hallmark Certification'
  ];

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Building className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold">International Company Information</h2>
              <p className="text-slate-600">Basic details about your global organization</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <Label htmlFor="companyType">Company Type *</Label>
                <Select value={formData.companyType} onValueChange={(value) => handleInputChange('companyType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select company type" />
                  </SelectTrigger>
                  <SelectContent>
                    {companyTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="registrationNumber">Company Registration Number *</Label>
                <Input
                  id="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                  placeholder="Legal registration number"
                />
              </div>
              
              <div>
                <Label htmlFor="vatNumber">VAT/Tax Number *</Label>
                <Input
                  id="vatNumber"
                  value={formData.vatNumber}
                  onChange={(e) => handleInputChange('vatNumber', e.target.value)}
                  placeholder="VAT/Sales Tax ID"
                />
              </div>
              
              <div>
                <Label htmlFor="dunsNumber">D-U-N-S Number</Label>
                <Input
                  id="dunsNumber"
                  value={formData.dunsNumber}
                  onChange={(e) => handleInputChange('dunsNumber', e.target.value)}
                  placeholder="9-digit D-U-N-S Number"
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
                <Label htmlFor="website">Company Website *</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  placeholder="https://www.company.com"
                />
              </div>
              
              <div>
                <Label htmlFor="timeZone">Primary Time Zone *</Label>
                <Select value={formData.timeZone} onValueChange={(value) => handleInputChange('timeZone', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your time zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EST">EST (Eastern Standard Time)</SelectItem>
                    <SelectItem value="PST">PST (Pacific Standard Time)</SelectItem>
                    <SelectItem value="GMT">GMT (Greenwich Mean Time)</SelectItem>
                    <SelectItem value="CET">CET (Central European Time)</SelectItem>
                    <SelectItem value="JST">JST (Japan Standard Time)</SelectItem>
                    <SelectItem value="AEST">AEST (Australian Eastern Time)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="businessAddress">Business Address *</Label>
              <Textarea
                id="businessAddress"
                value={formData.businessAddress}
                onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                placeholder="Complete business address including building, street, area"
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
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="state">State/Province *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  placeholder="State/Province"
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
                <Label htmlFor="postalCode">Postal Code *</Label>
                <Input
                  id="postalCode"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange('postalCode', e.target.value)}
                  placeholder="ZIP/Postal code"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Globe className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold">International Trade Profile</h2>
              <p className="text-slate-600">Your global trading experience and preferences</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tradingExperience">Years in International Trade *</Label>
                <Select value={formData.tradingExperience} onValueChange={(value) => handleInputChange('tradingExperience', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New to International Trade</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="annualImportValue">Annual Import Value *</Label>
                <Select value={formData.annualImportValue} onValueChange={(value) => handleInputChange('annualImportValue', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select import volume" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-100k">Under $100,000</SelectItem>
                    <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                    <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                    <SelectItem value="1m-5m">$1,000,000 - $5,000,000</SelectItem>
                    <SelectItem value="5m-10m">$5,000,000 - $10,000,000</SelectItem>
                    <SelectItem value="above-10m">Above $10,000,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label>Primary Markets/Countries You Sell To *</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 max-h-40 overflow-y-auto">
                {countries.map((country) => (
                  <label key={country} className="flex items-center space-x-2 p-2 border rounded hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={formData.primaryMarkets.includes(country)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('primaryMarkets', [...formData.primaryMarkets, country]);
                        } else {
                          handleInputChange('primaryMarkets', formData.primaryMarkets.filter(c => c !== country));
                        }
                      }}
                    />
                    <span className="text-sm">{country}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <Label>Preferred Incoterms *</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {incoterms.map((term) => (
                  <label key={term} className="flex items-center space-x-2 p-2 border rounded hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={formData.preferredIncoterms.includes(term)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('preferredIncoterms', [...formData.preferredIncoterms, term]);
                        } else {
                          handleInputChange('preferredIncoterms', formData.preferredIncoterms.filter(t => t !== term));
                        }
                      }}
                    />
                    <span className="text-sm">{term}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <Label>Preferred Transaction Currencies *</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {currencies.map((currency) => (
                  <label key={currency} className="flex items-center space-x-2 p-2 border rounded hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={formData.currencyPreferences.includes(currency)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('currencyPreferences', [...formData.currencyPreferences, currency]);
                        } else {
                          handleInputChange('currencyPreferences', formData.currencyPreferences.filter(c => c !== currency));
                        }
                      }}
                    />
                    <span className="text-sm">{currency}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Shield className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-slate-600">Primary and alternate contact details</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">Primary Contact Person</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactPersonName">Full Name *</Label>
                  <Input
                    id="contactPersonName"
                    value={formData.contactPersonName}
                    onChange={(e) => handleInputChange('contactPersonName', e.target.value)}
                    placeholder="Contact person name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="designation">Designation *</Label>
                  <Input
                    id="designation"
                    value={formData.designation}
                    onChange={(e) => handleInputChange('designation', e.target.value)}
                    placeholder="CEO, Procurement Manager, etc."
                  />
                </div>
                
                <div>
                  <Label htmlFor="contactEmail">Email ID *</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                    placeholder="contact@company.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="contactPhone">Phone Number (with country code) *</Label>
                  <Input
                    id="contactPhone"
                    value={formData.contactPhone}
                    onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                    placeholder="+1 XXX XXX XXXX"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-4">Alternate Contact Person</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="alternateContactName">Full Name</Label>
                  <Input
                    id="alternateContactName"
                    value={formData.alternateContactName}
                    onChange={(e) => handleInputChange('alternateContactName', e.target.value)}
                    placeholder="Alternate contact name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="alternateEmail">Email ID</Label>
                  <Input
                    id="alternateEmail"
                    type="email"
                    value={formData.alternateEmail}
                    onChange={(e) => handleInputChange('alternateEmail', e.target.value)}
                    placeholder="alternate@company.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="alternatePhone">Phone Number</Label>
                  <Input
                    id="alternatePhone"
                    value={formData.alternatePhone}
                    onChange={(e) => handleInputChange('alternatePhone', e.target.value)}
                    placeholder="+1 XXX XXX XXXX"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <Label>Business Languages *</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                {['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Japanese', 'Mandarin'].map((language) => (
                  <label key={language} className="flex items-center space-x-2 p-2 border rounded hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={formData.businessLanguages.includes(language)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('businessLanguages', [...formData.businessLanguages, language]);
                        } else {
                          handleInputChange('businessLanguages', formData.businessLanguages.filter(l => l !== language));
                        }
                      }}
                    />
                    <span className="text-sm">{language}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Plane className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold">Business Profile & Requirements</h2>
              <p className="text-slate-600">Your business needs and quality standards</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="businessCategory">Business Category *</Label>
                <Select value={formData.businessCategory} onValueChange={(value) => handleInputChange('businessCategory', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessCategories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="annualTurnover">Annual Company Turnover *</Label>
                <Select value={formData.annualTurnover} onValueChange={(value) => handleInputChange('annualTurnover', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select turnover range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1m">Under $1 Million</SelectItem>
                    <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                    <SelectItem value="5m-25m">$5M - $25M</SelectItem>
                    <SelectItem value="25m-100m">$25M - $100M</SelectItem>
                    <SelectItem value="100m-500m">$100M - $500M</SelectItem>
                    <SelectItem value="above-500m">Above $500M</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="employeeCount">Number of Employees *</Label>
                <Select value={formData.employeeCount} onValueChange={(value) => handleInputChange('employeeCount', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select employee range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="201-1000">201-1000</SelectItem>
                    <SelectItem value="above-1000">Above 1000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="yearsInBusiness">Years in Business *</Label>
                <Select value={formData.yearsInBusiness} onValueChange={(value) => handleInputChange('yearsInBusiness', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Years of operation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10-25">10-25 years</SelectItem>
                    <SelectItem value="above-25">Above 25 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label>Product Categories of Interest *</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
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
              <Label>Required Compliance Standards & Certifications</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {complianceStandards.map((standard) => (
                  <label key={standard} className="flex items-center space-x-2 p-2 border rounded hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={formData.complianceStandards.includes(standard)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('complianceStandards', [...formData.complianceStandards, standard]);
                        } else {
                          handleInputChange('complianceStandards', formData.complianceStandards.filter(s => s !== standard));
                        }
                      }}
                    />
                    <span className="text-sm">{standard}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="sustainabilityRequirements">Sustainability & ESG Requirements</Label>
              <Textarea
                id="sustainabilityRequirements"
                value={formData.sustainabilityRequirements}
                onChange={(e) => handleInputChange('sustainabilityRequirements', e.target.value)}
                placeholder="Describe your sustainability requirements, ESG compliance needs, ethical sourcing standards, etc."
                rows={3}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <CreditCard className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold">Trade Finance & Banking</h2>
              <p className="text-slate-600">International payment and trade finance details</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="eoriNumber">EORI Number (EU buyers)</Label>
                <Input
                  id="eoriNumber"
                  value={formData.eoriNumber}
                  onChange={(e) => handleInputChange('eoriNumber', e.target.value)}
                  placeholder="Economic Operator Registration ID"
                />
              </div>
              
              <div>
                <Label htmlFor="customsRegistration">Customs Registration Number</Label>
                <Input
                  id="customsRegistration"
                  value={formData.customsRegistration}
                  onChange={(e) => handleInputChange('customsRegistration', e.target.value)}
                  placeholder="Import customs registration"
                />
              </div>
              
              <div>
                <Label htmlFor="bankingPartner">Primary Banking Partner *</Label>
                <Input
                  id="bankingPartner"
                  value={formData.bankingPartner}
                  onChange={(e) => handleInputChange('bankingPartner', e.target.value)}
                  placeholder="Bank name for international transactions"
                />
              </div>
              
              <div>
                <Label htmlFor="letterOfCreditBank">Letter of Credit Issuing Bank</Label>
                <Input
                  id="letterOfCreditBank"
                  value={formData.letterOfCreditBank}
                  onChange={(e) => handleInputChange('letterOfCreditBank', e.target.value)}
                  placeholder="Bank that issues L/Cs"
                />
              </div>
              
              <div>
                <Label htmlFor="tradeFinanceLimit">Trade Finance Limit</Label>
                <Select value={formData.tradeFinanceLimit} onValueChange={(value) => handleInputChange('tradeFinanceLimit', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select finance limit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-100k">Under $100,000</SelectItem>
                    <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                    <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                    <SelectItem value="1m-5m">$1,000,000 - $5,000,000</SelectItem>
                    <SelectItem value="above-5m">Above $5,000,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="creditRating">Credit Rating (if any)</Label>
                <Select value={formData.creditRating} onValueChange={(value) => handleInputChange('creditRating', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select credit rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aaa">AAA</SelectItem>
                    <SelectItem value="aa">AA</SelectItem>
                    <SelectItem value="a">A</SelectItem>
                    <SelectItem value="bbb">BBB</SelectItem>
                    <SelectItem value="bb">BB</SelectItem>
                    <SelectItem value="b">B</SelectItem>
                    <SelectItem value="not-rated">Not Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="freightForwarder">Preferred Freight Forwarder</Label>
                <Input
                  id="freightForwarder"
                  value={formData.freightForwarder}
                  onChange={(e) => handleInputChange('freightForwarder', e.target.value)}
                  placeholder="Logistics company name"
                />
              </div>
              
              <div>
                <Label htmlFor="customsBroker">Customs Broker</Label>
                <Input
                  id="customsBroker"
                  value={formData.customsBroker}
                  onChange={(e) => handleInputChange('customsBroker', e.target.value)}
                  placeholder="Customs clearance agent"
                />
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="paymentTermsPreference">Preferred Payment Terms *</Label>
                <Select value={formData.paymentTermsPreference} onValueChange={(value) => handleInputChange('paymentTermsPreference', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="advance-100">100% Advance Payment</SelectItem>
                    <SelectItem value="advance-30-balance-bl">30% Advance + 70% against B/L</SelectItem>
                    <SelectItem value="letter-of-credit">Letter of Credit (L/C)</SelectItem>
                    <SelectItem value="usance-lc">Usance Letter of Credit</SelectItem>
                    <SelectItem value="documents-against-payment">Documents Against Payment (D/P)</SelectItem>
                    <SelectItem value="documents-against-acceptance">Documents Against Acceptance (D/A)</SelectItem>
                    <SelectItem value="open-account">Open Account</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="regulatoryLicenses">Special Import Licenses/Permits</Label>
                <Textarea
                  id="regulatoryLicenses"
                  value={formData.regulatoryLicenses}
                  onChange={(e) => handleInputChange('regulatoryLicenses', e.target.value)}
                  placeholder="List any special licenses required for importing your product categories"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="restrictedProducts">Restricted/Prohibited Products</Label>
                <Textarea
                  id="restrictedProducts"
                  value={formData.restrictedProducts}
                  onChange={(e) => handleInputChange('restrictedProducts', e.target.value)}
                  placeholder="Products you cannot import due to local regulations"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Upload className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold">Document Upload & Compliance</h2>
              <p className="text-slate-600">Upload required documents for international buyer verification</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { key: 'incorporationCertificate', label: 'Certificate of Incorporation *', required: true },
                { key: 'taxCertificate', label: 'Tax Registration Certificate *', required: true },
                { key: 'bankStatement', label: 'Bank Statement (Last 6 months) *', required: true },
                { key: 'tradeLicense', label: 'Import/Trade License', required: false },
                { key: 'importLicense', label: 'Import License/IEC Certificate', required: false },
                { key: 'financialStatements', label: 'Financial Statements (Last 2 years) *', required: true },
                { key: 'complianceCertificates', label: 'Compliance Certificates', required: false },
                { key: 'dunsReport', label: 'D&B Credit Report', required: false },
              ].map((doc) => (
                <div key={doc.key} className="p-4 border-2 border-dashed border-slate-300 rounded-lg hover:border-blue-400 transition-colors">
                  <div className="text-center">
                    <Upload className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                    <Label className="text-sm font-medium">{doc.label}</Label>
                    <input
                      type="file"
                      className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      onChange={(e) => handleFileUpload(doc.key, e.target.files?.[0] || null)}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    <p className="text-xs text-slate-500 mt-1">PDF, JPG, PNG (Max 10MB)</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Compliance Declaration:</h3>
                <div className="space-y-2 text-sm text-blue-700">
                  <label className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.sanctionsCompliance === 'yes'}
                      onChange={(e) => handleInputChange('sanctionsCompliance', e.target.checked ? 'yes' : '')}
                      className="mt-1"
                    />
                    <span>I confirm that my company is not on any international sanctions list and complies with all applicable trade restrictions.</span>
                  </label>
                  <label className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.amlKycCompliance === 'yes'}
                      onChange={(e) => handleInputChange('amlKycCompliance', e.target.checked ? 'yes' : '')}
                      className="mt-1"
                    />
                    <span>I agree to comply with AML/KYC requirements and provide additional documentation if requested.</span>
                  </label>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Important Notes:</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• All documents should be in English or accompanied by certified translations</li>
                  <li>• Documents should be notarized or apostilled as required by your jurisdiction</li>
                  <li>• File size should not exceed 10MB per document</li>
                  <li>• Documents marked with * are mandatory for international buyers</li>
                  <li>• Verification process may take 3-5 business days</li>
                  <li>• Additional documentation may be requested based on your country's regulations</li>
                  <li>• You'll receive email updates on application status and compliance requirements</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              International Buyer Onboarding
            </CardTitle>
            <p className="text-slate-600">Complete your registration to start sourcing authentic Indian products globally</p>
            
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
                          ? 'bg-blue-500 text-white'
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
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
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

export default BuyerOnboarding;
