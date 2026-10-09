import React, { createContext, useContext, useState, useEffect } from 'react';
import { Currency } from '../types';

interface AppContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (prices: { PKR: number; SAR: number; USD: number }) => string;
  formatNumber: (amount: number, curr?: Currency) => string;
  isQuoteModalOpen: boolean;
  openQuoteModal: (packageId?: string, packageTitle?: string) => void;
  closeQuoteModal: () => void;
  selectedPackageForModal: { id?: string; title?: string } | null;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  savedPackageIds: string[];
  toggleSavePackage: (id: string) => void;
  isPackageSaved: (id: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem('alhashmi_currency');
    return (saved as Currency) || 'PKR';
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<{ id?: string; title?: string } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  const [savedPackageIds, setSavedPackageIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('alhashmi_saved');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem('alhashmi_currency', c);
    showToast(`Currency switched to ${c}`);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const openQuoteModal = (packageId?: string, packageTitle?: string) => {
    setSelectedPackageForModal(packageId ? { id: packageId, title: packageTitle } : null);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedPackageForModal(null);
  };

  const toggleSavePackage = (id: string) => {
    setSavedPackageIds(prev => {
      let updated: string[];
      if (prev.includes(id)) {
        updated = prev.filter(item => item !== id);
        showToast('Package removed from favorites');
      } else {
        updated = [...prev, id];
        showToast('Package saved to favorites');
      }
      localStorage.setItem('alhashmi_saved', JSON.stringify(updated));
      return updated;
    });
  };

  const isPackageSaved = (id: string) => savedPackageIds.includes(id);

  const formatNumber = (amount: number, curr: Currency = currency): string => {
    const formatted = new Intl.NumberFormat('en-US').format(amount);
    switch (curr) {
      case 'PKR':
        return `PKR ${formatted}`;
      case 'SAR':
        return `SAR ${formatted}`;
      case 'USD':
        return `$${formatted}`;
      default:
        return `${curr} ${formatted}`;
    }
  };

  const formatPrice = (prices: { PKR: number; SAR: number; USD: number }): string => {
    const val = prices[currency] || prices.PKR;
    return formatNumber(val, currency);
  };

  return (
    <AppContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        formatNumber,
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        selectedPackageForModal,
        toastMessage,
        showToast,
        savedPackageIds,
        toggleSavePackage,
        isPackageSaved,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
