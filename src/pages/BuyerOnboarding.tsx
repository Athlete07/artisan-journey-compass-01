
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight, ChevronLeft, Upload, Check, Building, CreditCard, Globe, Shield } from 'lucide-react';

const BuyerOnboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    companyType: '',
    registrationNumber: '',
    taxId: '',
    gstNumber: '',
    incorporationDate: '',
    businessAddress: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    phone: '',
    email: '',
    website: '',
    
    // Contact Person Details
    contactPersonName: '',
    designation: '',
    contactEmail: '',
    contactPhone: '',
    alternateContactName: '',
    alternateEmail: '',
    alternatePhone: '',
    
    // Business Profile
    businessCategory: '',
    productCategories: [] as string[],
    annualTurnover: '',
    employeeCount: '',
    yearsInBusiness: '',
    targetMarkets: [] as string[],
    preferredSuppliers: '',
    qualityCertifications: '' as string,
    
    // EXIM Details
    importLicense: '',
    exportLicense: '',
    ieCode: '',
    customsRegistration: '',
    bankingPartner: '',
    creditRating: '',
    paymentTermsPreference: '',
    
    // Documents
    incorporationCertificate: null as File | null,
    gstCertificate: null as File | null,
    bankStatement: null as File | null,
    tradeLicense: null as File | null,
    ieCodeCertificate: null as File | null,
    financialStatements: null as File | null,
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const totalSteps = 5;

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
      description: "Your buyer onboarding application is under review. You'll receive an email within 24-48 hours.",
    });
    navigate('/dashboard');
  };

  const companyTypes = [
    'Private Limited Company',
    'Public Limited Company',
    'Partnership Firm',
    'Limited Liability Partnership (LLP)',
    'Sole Proprietorship',
    'Government Organization',
    'NGO/Trust/Society',
    'Multinational Corporation'
  ];

  const businessCategories = [
    'Retailer',
    'Wholesaler',
    'Distributor',
    'Manufacturer',
    'E-commerce Platform',
    'Trading House',
    'Government Procurement',
    'Corporate Gifting'
  ];

  const productCategories = [
    'Textiles & Apparel',
    'Handicrafts & Artworks',
    'Jewelry & Accessories',
    'Home Decor',
    'Furniture',
    'Leather Goods',
    'Spices & Food Products',
    'Ayurvedic & Wellness',
    'Electronics & Technology',
    'Automotive Parts'
  ];

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Building className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold">Company Information</h2>
              <p className="text-slate-600">Basic details about your organization</p>
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
                  placeholder="CIN/Registration number"
                />
              </div>
              
              <div>
                <Label htmlFor="gstNumber">GST Number *</Label>
                <Input
                  id="gstNumber"
                  value={formData.gstNumber}
                  onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                  placeholder="15-digit GST number"
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
                <Label htmlFor="website">Company Website</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  placeholder="https://www.company.com"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="businessAddress">Business Address *</Label>
              <Textarea
                id="businessAddress"
                value={formData.businessAddress}
                onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                placeholder="Complete business address"
                rows={3}
              />
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  placeholder="India"
                />
              </div>
              
              <div>
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  placeholder="State name"
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
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                  placeholder="6-digit pincode"
                />
              </div>
            </div>
          </div>
        );

      case 2:
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
                    placeholder="CEO, Manager, etc."
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
                  <Label htmlFor="contactPhone">Phone Number *</Label>
                  <Input
                    id="contactPhone"
                    value={formData.contactPhone}
                    onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
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
                    placeholder="+91 XXXXX XXXXX"
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
              <Globe className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold">Business Profile</h2>
              <p className="text-slate-600">Tell us about your business requirements</p>
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
                <Label htmlFor="annualTurnover">Annual Turnover *</Label>
                <Select value={formData.annualTurnover} onValueChange={(value) => handleInputChange('annualTurnover', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select turnover range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below-10-lakhs">Below ₹10 Lakhs</SelectItem>
                    <SelectItem value="10-50-lakhs">₹10 Lakhs - ₹50 Lakhs</SelectItem>
                    <SelectItem value="50-lakhs-2-crores">₹50 Lakhs - ₹2 Crores</SelectItem>
                    <SelectItem value="2-10-crores">₹2 Crores - ₹10 Crores</SelectItem>
                    <SelectItem value="above-10-crores">Above ₹10 Crores</SelectItem>
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
                    <SelectItem value="201-500">201-500</SelectItem>
                    <SelectItem value="above-500">Above 500</SelectItem>
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
                    <SelectItem value="above-10">Above 10 years</SelectItem>
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
              <Label htmlFor="preferredSuppliers">Preferred Supplier Characteristics</Label>
              <Textarea
                id="preferredSuppliers"
                value={formData.preferredSuppliers}
                onChange={(e) => handleInputChange('preferredSuppliers', e.target.value)}
                placeholder="Describe your ideal suppliers (location, certifications, production capacity, etc.)"
                rows={3}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <CreditCard className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold">EXIM & Compliance Details</h2>
              <p className="text-slate-600">Export-Import and regulatory information</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ieCode">IEC (Import Export Code)</Label>
                <Input
                  id="ieCode"
                  value={formData.ieCode}
                  onChange={(e) => handleInputChange('ieCode', e.target.value)}
                  placeholder="10-digit IEC number"
                />
              </div>
              
              <div>
                <Label htmlFor="customsRegistration">Customs Registration Number</Label>
                <Input
                  id="customsRegistration"
                  value={formData.customsRegistration}
                  onChange={(e) => handleInputChange('customsRegistration', e.target.value)}
                  placeholder="Customs registration"
                />
              </div>
              
              <div>
                <Label htmlFor="bankingPartner">Primary Banking Partner *</Label>
                <Input
                  id="bankingPartner"
                  value={formData.bankingPartner}
                  onChange={(e) => handleInputChange('bankingPartner', e.target.value)}
                  placeholder="Bank name for transactions"
                />
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
              
              <div className="md:col-span-2">
                <Label htmlFor="paymentTermsPreference">Preferred Payment Terms *</Label>
                <Select value={formData.paymentTermsPreference} onValueChange={(value) => handleInputChange('paymentTermsPreference', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="advance-100">100% Advance</SelectItem>
                    <SelectItem value="advance-50-balance-shipment">50% Advance + 50% on Shipment</SelectItem>
                    <SelectItem value="advance-30-balance-delivery">30% Advance + 70% on Delivery</SelectItem>
                    <SelectItem value="net-30">Net 30 Days</SelectItem>
                    <SelectItem value="net-60">Net 60 Days</SelectItem>
                    <SelectItem value="letter-of-credit">Letter of Credit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="qualityCertifications">Quality Certifications & Standards</Label>
              <Textarea
                id="qualityCertifications"
                value={formData.qualityCertifications}
                onChange={(e) => handleInputChange('qualityCertifications', e.target.value)}
                placeholder="List any quality certifications required (ISO, BIS, CE, etc.)"
                rows={3}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Upload className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold">Document Upload</h2>
              <p className="text-slate-600">Upload required documents for verification</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { key: 'incorporationCertificate', label: 'Certificate of Incorporation *', required: true },
                { key: 'gstCertificate', label: 'GST Registration Certificate *', required: true },
                { key: 'bankStatement', label: 'Bank Statement (Last 3 months) *', required: true },
                { key: 'tradeLicense', label: 'Trade License', required: false },
                { key: 'ieCodeCertificate', label: 'IEC Certificate', required: false },
                { key: 'financialStatements', label: 'Financial Statements (Last 2 years)', required: false },
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
                    <p className="text-xs text-slate-500 mt-1">PDF, JPG, PNG (Max 5MB)</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Important Notes:</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• All documents should be clear and legible</li>
                <li>• File size should not exceed 5MB per document</li>
                <li>• Documents marked with * are mandatory</li>
                <li>• Verification may take 24-48 hours</li>
                <li>• You'll receive email updates on application status</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Buyer Onboarding
            </CardTitle>
            <p className="text-slate-600">Complete your registration to start sourcing from verified artisans</p>
            
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
