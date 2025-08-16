// emailService.js
 
import emailjs from '@emailjs/browser';

  const sanitize = (value) => {
  if (typeof value === 'string') {
    return value.trim() === '' ? 'N/A' : value;
  }
  if (value === undefined || value === null) {
    return 'N/A';
  }
  return value;
};
 
 
const SERVICE_ID = 'service_azb26ks';
const ADMIN_TEMPLATE_ID = 'template_i4yx3al';
const USER_TEMPLATE_ID = 'template_v3x552b';
 
// SubService template IDs
const SUBSERVICE_ADMIN_TEMPLATE_ID = 'template_0yxv4ra';
const SUBSERVICE_USER_TEMPLATE_ID = 'template_145waea';  
 
const PUBLIC_KEY = 'DyDZ85E9uwzwSyUoD';
 
emailjs.init(PUBLIC_KEY);
 
// Function to get the initial landing URL
let initialLandingUrl = null;
 
const getSourceUrl = () => {
  if (typeof window === "undefined") return "Unknown";
 
  // If we haven't stored the initial URL yet, store it
  if (!initialLandingUrl) {
    initialLandingUrl = window.location.href;
  }
 
  return initialLandingUrl;
};
 
// Function to get IP address
const getIPAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Failed to get IP address:", error);
    return "IP address not available";
  }
};
 
// Original functions (keeping your existing ones)
export const sendAdminEmail = async (formData) => {
  const ipAddress = await getIPAddress();
 
  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
alternateNumber: sanitize(formData.alternateNumber),
    category: formData.category,
    streetAddress: formData.streetAddress,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    fullAddress: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}`,
    message: `New legal service request from ${formData.name}`,
    submissionDate: new Date().toLocaleString(),
    ip_address: ipAddress,
    page_source: getSourceUrl(),
   
    // TrustedForm data
    trustedFormCertUrl: formData.xxTrustedFormCertUrl || 'Not available',
    trustedFormPingUrl: formData.xxTrustedFormPingUrl || 'Not available',
    trustedFormToken: formData.xxTrustedFormCertToken || 'Not available',
  };
 
  return emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams);
};
 
export const sendUserEmail = async (formData) => {
  const ipAddress = await getIPAddress();
 
  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
alternateNumber: sanitize(formData.alternateNumber),
    category: formData.category,
    streetAddress: formData.streetAddress,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    fullAddress: `${formData.streetAddress}, ${formData.city}, ${formData.state} ${formData.zipCode}`,
    date: new Date().toLocaleDateString(),
    ip_address: ipAddress,
    submissionDate: new Date().toLocaleString(),
    page_source: getSourceUrl(),
   
    // TrustedForm data
    trustedFormCertUrl: formData.xxTrustedFormCertUrl || 'Not available',
    trustedFormPingUrl: formData.xxTrustedFormPingUrl || 'Not available',
    trustedFormToken: formData.xxTrustedFormCertToken || 'Not available',
  };
 
  return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParams);
};
 
// NEW SubService functions
export const SubServiceSendAdminEmail = async (formData) => {
  const ipAddress = await getIPAddress();
 
  const templateParams = {
    // Handle both desktop and mobile form field names
    firstName: formData.firstName || formData.fist_name || '',
    lastName: formData.lastName || '',
    full_name: `${formData.firstName || formData.fist_name || ''} ${formData.lastName || ''}`.trim(),
    email: formData.email,
    phone: formData.phone,
alternateNumber: sanitize(formData.alternateNumber),
    streetAddress: formData.streetAddress,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    fullAddress: `${formData.streetAddress || ''}, ${formData.city || ''}, ${formData.state || ''} ${formData.zipCode || ''}`.replace(/^,\s*/, '').trim(),
    message: `New SubService case review request from ${formData.firstName || formData.fist_name || ''} ${formData.lastName || ''}`,
    submissionDate: new Date().toLocaleString(),
    ip_address: ipAddress,
    page_source: getSourceUrl(),
   
    // TrustedForm data
    trustedFormCertUrl: formData.xxTrustedFormCertUrl || 'Not available',
    trustedFormPingUrl: formData.xxTrustedFormPingUrl || 'Not available',
    trustedFormToken: formData.xxTrustedFormCertToken || 'Not available',
   
    // Additional fields for better tracking
    form_type: 'SubService Case Review',
    captcha_verified: 'Yes',
    terms_accepted: formData.termsAccepted ? 'Yes' : 'No',
  };
 
  return emailjs.send(SERVICE_ID, SUBSERVICE_ADMIN_TEMPLATE_ID, templateParams);
};
 
export const SubServiceSendUserEmail = async (formData) => {
  const ipAddress = await getIPAddress();
 
  const templateParams = {
    // Handle both desktop and mobile form field names
    firstName: formData.firstName || formData.firstName || '',
    lastName: formData.lastName || '',
    full_name: `${formData.firstName || formData.firstName || ''} ${formData.lastName || ''}`.trim(),
    email: formData.email,
alternateNumber: sanitize(formData.alternateNumber),

    phone: formData.phone,
    streetAddress: formData.streetAddress,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    fullAddress: `${formData.streetAddress || ''}, ${formData.city || ''}, ${formData.state || ''} ${formData.zipCode || ''}`.replace(/^,\s*/, '').trim(),
    date: new Date().toLocaleDateString(),
    submissionDate: new Date().toLocaleString(),
    ip_address: ipAddress,
    page_source: getSourceUrl(),
   
    // TrustedForm data
    trustedFormCertUrl: formData.xxTrustedFormCertUrl || 'Not available',
    trustedFormPingUrl: formData.xxTrustedFormPingUrl || 'Not available',
    trustedFormToken: formData.xxTrustedFormCertToken || 'Not available',
   
    // Additional fields for personalization
    form_type: 'SubService Case Review',
  };
 
  return emailjs.send(SERVICE_ID, SUBSERVICE_USER_TEMPLATE_ID, templateParams);
};
 
 