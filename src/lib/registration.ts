export type RegistrationData = {
  name: string;
  email: string;
  phone: string;
};

const STORAGE_KEY = "fastpay:registration";

export function saveRegistration(data: RegistrationData) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function loadRegistration(): RegistrationData | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as RegistrationData;
  } catch {
    return null;
  }
}
