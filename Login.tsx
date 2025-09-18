// TypeScript interfaces
interface RegistrationFormData { fullName: string; email: string; password: string; confirmPassword: string; }
interface OTPVerificationState { otp: string; isVerifying: boolean; error: string | null; resendCooldown: number; canResend: boolean; }

const [currentStep, setCurrentStep] = useState<'register' | 'verify-otp' | 'success'>('register');
// ...all state logic as previously discussed, with async fetch/verify OTP handlers

return (
  // Tabbed UI, register/login forms; OTP 6-digit input fields and spinners
);
