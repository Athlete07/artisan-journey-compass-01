
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ChevronRight, ChevronLeft, Upload, Check, User, Palette, FileText, Camera, Award } from 'lucide-react';

const ArtisanOnboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    dateOfBirth: '',
    gender: '',
    fatherSpouseName: '',
    aadhaarNumber: '',
    panNumber: '',
    phone: '',
    email: '',
    alternatePhone: '',
    
    // Address Details
    currentAddress: '',
    permanentAddress: '',
    state: '',
    district: '',
    block: '',
    village: '',
    pincode: '',
    nearestLandmark: '',
    
    // Artisan Profile
    craftSpecialty: '',
    craftSubcategory: '',
    experienceYears: '',
    learningSource: '',
    masterArtisan: '',
    toolsEquipment: '',
    workshopDetails: '',
    productionCapacity: '',
    qualityGrade: '',
    
    // Business Information
    businessType: '',
    businessName: '',
    businessRegistration: '',
    gstNumber: '',
    udyamNumber: '',
    bankAccountNumber: '',
    bankName: '',
    ifscCode: '',
    accountHolderName: '',
    
    // Skill Assessment
    primarySkills: [] as string[],
    certifications: '',
    awards: '',
    exhibitions: '',
    trainingPrograms: '',
    innovationProjects: '',
    
    // Market Readiness
    productRange: '',
    priceRange: '',
    targetMarket: '',
    distributionChannels: '',
    digitalLiteracy: '',
    languagesProficient: [] as string[],
    
    // Documents
    aadhaarCard: null as File | null,
    panCard: null as File | null,
    bankPassbook: null as File | null,
    craftCertificate: null as File | null,
    productPhotos: [] as File[],
    workshopPhotos: [] as File[],
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
      title: "Application Submitted Successfully",
      description: "Your artisan profile is under review. You'll receive an email within 24-48 hours with your verification status.",
    });
    navigate('/dashboard');
  };

  const craftSpecialties = [
    'Textiles & Weaving',
    'Pottery & Ceramics',
    'Metalwork & Jewelry',
    'Woodwork & Furniture',
    'Leather Crafts',
    'Stone Carving',
    'Painting & Art',
    'Embroidery & Needlework',
    'Basket Weaving',
    'Glass Work',
    'Paper Crafts',
    'Traditional Toys'
  ];

  const experienceRanges = [
    'Less than 1 year',
    '1-3 years',
    '3-5 years',
    '5-10 years',
    '10-20 years',
    'More than 20 years'
  ];

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold">Personal Information</h2>
              <p className="text-slate-600">Basic details for identity verification</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="As per Aadhaar card"
                />
              </div>
              
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="gender">Gender *</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="fatherSpouseName">Father's/Spouse's Name *</Label>
                <Input
                  id="fatherSpouseName"
                  value={formData.fatherSpouseName}
                  onChange={(e) => handleInputChange('fatherSpouseName', e.target.value)}
                  placeholder="As per official documents"
                />
              </div>
              
              <div>
                <Label htmlFor="aadhaarNumber">Aadhaar Number *</Label>
                <Input
                  id="aadhaarNumber"
                  value={formData.aadhaarNumber}
                  onChange={(e) => handleInputChange('aadhaarNumber', e.target.value)}
                  placeholder="12-digit Aadhaar number"
                  maxLength={12}
                />
              </div>
              
              <div>
                <Label htmlFor="panNumber">PAN Number</Label>
                <Input
                  id="panNumber"
                  value={formData.panNumber}
                  onChange={(e) => handleInputChange('panNumber', e.target.value)}
                  placeholder="10-character PAN number"
                  maxLength={10}
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Mobile Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email ID</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
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
              <h2 className="text-2xl font-bold">Address Details</h2>
              <p className="text-slate-600">Current and permanent address information</p>
            </div>
            
            <div>
              <Label htmlFor="currentAddress">Current Address *</Label>
              <Textarea
                id="currentAddress"
                value={formData.currentAddress}
                onChange={(e) => handleInputChange('currentAddress', e.target.value)}
                placeholder="House number, street, locality"
                rows={3}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="sameAddress"
                onChange={(e) => {
                  if (e.target.checked) {
                    handleInputChange('permanentAddress', formData.currentAddress);
                  }
                }}
              />
              <Label htmlFor="sameAddress">Permanent address same as current address</Label>
            </div>
            
            <div>
              <Label htmlFor="permanentAddress">Permanent Address *</Label>
              <Textarea
                id="permanentAddress"
                value={formData.permanentAddress}
                onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                placeholder="House number, street, locality"
                rows={3}
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
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
                <Label htmlFor="district">District *</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) => handleInputChange('district', e.target.value)}
                  placeholder="District name"
                />
              </div>
              
              <div>
                <Label htmlFor="block">Block/Tehsil</Label>
                <Input
                  id="block"
                  value={formData.block}
                  onChange={(e) => handleInputChange('block', e.target.value)}
                  placeholder="Block or Tehsil"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="village">Village/City *</Label>
                <Input
                  id="village"
                  value={formData.village}
                  onChange={(e) => handleInputChange('village', e.target.value)}
                  placeholder="Village or city name"
                />
              </div>
              
              <div>
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                  placeholder="6-digit pincode"
                  maxLength={6}
                />
              </div>
              
              <div>
                <Label htmlFor="nearestLandmark">Nearest Landmark</Label>
                <Input
                  id="nearestLandmark"
                  value={formData.nearestLandmark}
                  onChange={(e) => handleInputChange('nearestLandmark', e.target.value)}
                  placeholder="School, temple, etc."
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Palette className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold">Artisan Profile</h2>
              <p className="text-slate-600">Tell us about your craft and expertise</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="craftSpecialty">Primary Craft Specialty *</Label>
                <Select value={formData.craftSpecialty} onValueChange={(value) => handleInputChange('craftSpecialty', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your main craft" />
                  </SelectTrigger>
                  <SelectContent>
                    {craftSpecialties.map((craft) => (
                      <SelectItem key={craft} value={craft}>{craft}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="craftSubcategory">Craft Subcategory</Label>
                <Input
                  id="craftSubcategory"
                  value={formData.craftSubcategory}
                  onChange={(e) => handleInputChange('craftSubcategory', e.target.value)}
                  placeholder="e.g., Banarasi sarees, Blue pottery"
                />
              </div>
              
              <div>
                <Label htmlFor="experienceYears">Years of Experience *</Label>
                <Select value={formData.experienceYears} onValueChange={(value) => handleInputChange('experienceYears', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience range" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceRanges.map((range) => (
                      <SelectItem key={range} value={range}>{range}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="learningSource">How did you learn this craft? *</Label>
                <Select value={formData.learningSource} onValueChange={(value) => handleInputChange('learningSource', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select learning source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family-tradition">Family Tradition</SelectItem>
                    <SelectItem value="master-artisan">Master Artisan</SelectItem>
                    <SelectItem value="training-institute">Training Institute</SelectItem>
                    <SelectItem value="government-program">Government Program</SelectItem>
                    <SelectItem value="ngo-program">NGO Program</SelectItem>
                    <SelectItem value="self-taught">Self-taught</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="masterArtisan">Master Artisan/Guru Name</Label>
                <Input
                  id="masterArtisan"
                  value={formData.masterArtisan}
                  onChange={(e) => handleInputChange('masterArtisan', e.target.value)}
                  placeholder="Name of your teacher/mentor"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="toolsEquipment">Tools & Equipment Available *</Label>
              <Textarea
                id="toolsEquipment"
                value={formData.toolsEquipment}
                onChange={(e) => handleInputChange('toolsEquipment', e.target.value)}
                placeholder="List the tools and equipment you have for your craft"
                rows={3}
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="workshopDetails">Workshop/Workspace Details</Label>
                <Textarea
                  id="workshopDetails"
                  value={formData.workshopDetails}
                  onChange={(e) => handleInputChange('workshopDetails', e.target.value)}
                  placeholder="Describe your workspace (size, location, setup)"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="productionCapacity">Monthly Production Capacity</Label>
                <Textarea
                  id="productionCapacity"
                  value={formData.productionCapacity}
                  onChange={(e) => handleInputChange('productionCapacity', e.target.value)}
                  placeholder="How many pieces can you make per month?"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <FileText className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold">Business Information</h2>
              <p className="text-slate-600">Banking and business registration details</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="businessType">Business Type *</Label>
                <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Artisan</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="self-help-group">Self Help Group</SelectItem>
                    <SelectItem value="cooperative">Cooperative Society</SelectItem>
                    <SelectItem value="private-limited">Private Limited Company</SelectItem>
                    <SelectItem value="proprietorship">Sole Proprietorship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="If you have a business name"
                />
              </div>
              
              <div>
                <Label htmlFor="gstNumber">GST Number</Label>
                <Input
                  id="gstNumber"
                  value={formData.gstNumber}
                  onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                  placeholder="15-digit GST number"
                />
              </div>
              
              <div>
                <Label htmlFor="udyamNumber">Udyam Registration Number</Label>
                <Input
                  id="udyamNumber"
                  value={formData.udyamNumber}
                  onChange={(e) => handleInputChange('udyamNumber', e.target.value)}
                  placeholder="UDYAM-XX-XX-XXXXXXX"
                />
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">Banking Details *</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="accountHolderName">Account Holder Name *</Label>
                  <Input
                    id="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={(e) => handleInputChange('accountHolderName', e.target.value)}
                    placeholder="As per bank records"
                  />
                </div>
                
                <div>
                  <Label htmlFor="bankAccountNumber">Bank Account Number *</Label>
                  <Input
                    id="bankAccountNumber"
                    value={formData.bankAccountNumber}
                    onChange={(e) => handleInputChange('bankAccountNumber', e.target.value)}
                    placeholder="Account number"
                  />
                </div>
                
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
                  <Label htmlFor="ifscCode">IFSC Code *</Label>
                  <Input
                    id="ifscCode"
                    value={formData.ifscCode}
                    onChange={(e) => handleInputChange('ifscCode', e.target.value)}
                    placeholder="11-character IFSC code"
                    maxLength={11}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Award className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold">Skills & Market Readiness</h2>
              <p className="text-slate-600">Your capabilities and market preparation</p>
            </div>
            
            <div>
              <Label>Primary Skills *</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                {[
                  'Design Creation',
                  'Color Coordination',
                  'Pattern Making',
                  'Hand Painting',
                  'Machine Operation',
                  'Quality Control',
                  'Packaging',
                  'Customer Service',
                  'Digital Photography',
                  'Online Selling'
                ].map((skill) => (
                  <label key={skill} className="flex items-center space-x-2 p-2 border rounded hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={formData.primarySkills.includes(skill)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('primarySkills', [...formData.primarySkills, skill]);
                        } else {
                          handleInputChange('primarySkills', formData.primarySkills.filter(s => s !== skill));
                        }
                      }}
                    />
                    <span className="text-sm">{skill}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="productRange">Product Range *</Label>
                <Textarea
                  id="productRange"
                  value={formData.productRange}
                  onChange={(e) => handleInputChange('productRange', e.target.value)}
                  placeholder="List the products you can make"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="priceRange">Price Range *</Label>
                <Textarea
                  id="priceRange"
                  value={formData.priceRange}
                  onChange={(e) => handleInputChange('priceRange', e.target.value)}
                  placeholder="Typical price range for your products"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="targetMarket">Target Market</Label>
                <Select value={formData.targetMarket} onValueChange={(value) => handleInputChange('targetMarket', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Who do you want to sell to?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local">Local Market</SelectItem>
                    <SelectItem value="regional">Regional Market</SelectItem>
                    <SelectItem value="national">National Market</SelectItem>
                    <SelectItem value="international">International Market</SelectItem>
                    <SelectItem value="online">Online Platforms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="digitalLiteracy">Digital Literacy Level</Label>
                <Select value={formData.digitalLiteracy} onValueChange={(value) => handleInputChange('digitalLiteracy', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Your comfort with technology" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label>Languages You Can Communicate In</Label>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                {['Hindi', 'English', 'Bengali', 'Tamil', 'Telugu', 'Marathi', 'Gujarati', 'Punjabi', 'Kannada', 'Malayalam', 'Odia', 'Urdu'].map((language) => (
                  <label key={language} className="flex items-center space-x-2 p-2 border rounded hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={formData.languagesProficient.includes(language)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('languagesProficient', [...formData.languagesProficient, language]);
                        } else {
                          handleInputChange('languagesProficient', formData.languagesProficient.filter(l => l !== language));
                        }
                      }}
                    />
                    <span className="text-sm">{language}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="certifications">Certifications & Training</Label>
                <Textarea
                  id="certifications"
                  value={formData.certifications}
                  onChange={(e) => handleInputChange('certifications', e.target.value)}
                  placeholder="Any certifications or training programs completed"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="awards">Awards & Recognition</Label>
                <Textarea
                  id="awards"
                  value={formData.awards}
                  onChange={(e) => handleInputChange('awards', e.target.value)}
                  placeholder="Any awards or recognition received"
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
              <Camera className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold">Document Upload</h2>
              <p className="text-slate-600">Upload required documents and photos</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { key: 'aadhaarCard', label: 'Aadhaar Card *', required: true },
                { key: 'panCard', label: 'PAN Card', required: false },
                { key: 'bankPassbook', label: 'Bank Passbook/Statement *', required: true },
                { key: 'craftCertificate', label: 'Craft Certificate (if any)', required: false },
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
                    <p className="text-xs text-slate-500 mt-1">PDF, JPG, PNG (Max 5MB)</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
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
                  <p className="text-xs text-slate-500 mt-1">Upload 3-5 photos of your best work</p>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg hover:border-purple-400 transition-colors">
                <div className="text-center">
                  <Camera className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                  <Label className="text-sm font-medium">Workshop Photos</Label>
                  <input
                    type="file"
                    multiple
                    className="mt-2 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      handleInputChange('workshopPhotos', files);
                    }}
                    accept=".jpg,.jpeg,.png"
                  />
                  <p className="text-xs text-slate-500 mt-1">Photos of your workspace/tools</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">Important Guidelines:</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Ensure all documents are clear and readable</li>
                <li>• Product photos should showcase your best work</li>
                <li>• File size should not exceed 5MB per file</li>
                <li>• Documents marked with * are mandatory</li>
                <li>• Verification process takes 24-48 hours</li>
                <li>• You'll receive SMS and email updates</li>
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
      <div className="max-w-4xl mx-auto px-4">
        <Card className="backdrop-blur-sm bg-white/80 border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Artisan Onboarding
            </CardTitle>
            <p className="text-slate-600">Join our platform and showcase your craft to the world</p>
            
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
