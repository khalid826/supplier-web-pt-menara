# **Comprehensive Language Switch Implementation Plan**

## **Project: PT Menara Adhi Sitara - EN/ID Language Support**

---

## **Phase 1: Setup & Configuration (Day 1)**

### **1.1 Install Dependencies**
```bash
npm install next-intl
```

### **1.2 Create File Structure**
```
/locales/
  /en.json
  /id.json
/middleware.ts
/components/
  /LanguageSwitcher.jsx
  /common/
    /Navbar.jsx (update)
```

### **1.3 Configure Next.js**
```javascript
// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
  // existing config
});
```

### **1.4 Create Middleware**
```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'id'],
  defaultLocale: 'id'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
```

---

## **Phase 2: Translation Files (Day 1)**

### **2.1 Create Translation Files**

```json
// locales/en.json
{
  "nav": {
    "home": "Home",
    "products": "Products",
    "about": "About"
  },
  "home": {
    "hero": {
      "title": "Your Premier Partner for Electrical & Instrumentation Solutions",
      "subtitle": "Discover our comprehensive range of electrical and instrumentation solutions"
    },
    "services": {
      "title": "Our Services",
      "subtitle": "Premium electrical and instrumentation solutions from leading brands"
    }
  },
  "products": {
    "title": "Our Products",
    "subtitle": "Discover our comprehensive range of electrical and instrumentation solutions"
  },
  "about": {
    "title": "About Us",
    "subtitle": "Your trusted partner in electrical and instrumentation solutions"
  },
  "contact": {
    "title": "Contact Us",
    "subtitle": "Get in touch with our team"
  },
  "footer": {
    "description": "Your Premier Partner for Electrical & Instrumentation Solutions",
    "address": "Address",
    "phone": "Phone",
    "email": "Email"
  }
}
```

```json
// locales/id.json
{
  "nav": {
    "home": "Beranda",
    "products": "Produk",
    "about": "Tentang"
  },
  "home": {
    "hero": {
      "title": "Mitra Utama Anda untuk Solusi Elektrikal & Instrumentasi",
      "subtitle": "Temukan rangkaian solusi elektrikal dan instrumentasi komprehensif kami"
    },
    "services": {
      "title": "Layanan Kami",
      "subtitle": "Solusi elektrikal dan instrumentasi premium dari merek terkemuka"
    }
  },
  "products": {
    "title": "Produk Kami",
    "subtitle": "Temukan rangkaian solusi elektrikal dan instrumentasi komprehensif kami"
  },
  "about": {
    "title": "Tentang Kami",
    "subtitle": "Mitra terpercaya Anda dalam solusi elektrikal dan instrumentasi"
  },
  "contact": {
    "title": "Hubungi Kami",
    "subtitle": "Hubungi tim kami"
  },
  "footer": {
    "description": "Mitra Utama Anda untuk Solusi Elektrikal & Instrumentasi",
    "address": "Alamat",
    "phone": "Telepon",
    "email": "Email"
  }
}
```

---

## **Phase 3: Language Switcher Component (Day 1-2)**

### **3.1 Create Language Switcher**
```jsx
// components/LanguageSwitcher.jsx
"use client"

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (newLocale) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    
    // Navigate to new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
    
    // Save preference
    localStorage.setItem('preferred-language', newLocale);
  };

  if (!mounted) return null;

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="bg-transparent border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC402]/40"
      >
        <option value="id">🇮🇩 Indonesia</option>
        <option value="en">🇺🇸 English</option>
      </select>
    </div>
  );
}
```

### **3.2 Update Navbar**
```jsx
// components/common/Navbar.jsx
// Add import
import LanguageSwitcher from '../LanguageSwitcher';

// Add to desktop navigation (after nav buttons)
<div className="flex-shrink-0 ml-4">
  <LanguageSwitcher />
</div>

// Add to mobile navigation (before hamburger)
<div className="flex-shrink-0 mr-2">
  <LanguageSwitcher />
</div>
```

---

## **Phase 4: Update App Structure (Day 2)**

### **4.1 Create Locale Layout**
```jsx
// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
```

### **4.2 Update Root Layout**
```jsx
// app/layout.tsx
// Remove Footer import and FooterWrapper
// Keep only the basic structure
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
```

### **4.3 Move Pages to Locale Structure**
```
Move all pages from:
/app/page.jsx → /app/[locale]/page.jsx
/app/about/page.jsx → /app/[locale]/about/page.jsx
/app/products/page.jsx → /app/[locale]/products/page.jsx
/app/contact/page.jsx → /app/[locale]/contact/page.jsx
```

---

## **Phase 5: Update Components (Day 2-3)**

### **5.1 Update HomePage Component**
```jsx
// components/HomePage.jsx
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t('home.hero.title')}</h1>
      <p>{t('home.hero.subtitle')}</p>
      {/* ... rest of component */}
    </div>
  );
}
```

### **5.2 Update ProductsPage Component**
```jsx
// components/ProductsPage.jsx
import { useTranslations } from 'next-intl';

export default function ProductsPage({ breadcrumb }) {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t('products.title')}</h1>
      <p>{t('products.subtitle')}</p>
      {/* ... rest of component */}
    </div>
  );
}
```

### **5.3 Update AboutPage Component**
```jsx
// components/AboutPage.jsx
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t('about.title')}</h1>
      <p>{t('about.subtitle')}</p>
      {/* ... rest of component */}
    </div>
  );
}
```

### **5.4 Update Footer Component**
```jsx
// components/common/Footer.jsx
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  
  return (
    <footer>
      <p>{t('footer.description')}</p>
      <div>
        <span>{t('footer.address')}: ...</span>
        <span>{t('footer.phone')}: ...</span>
        <span>{t('footer.email')}: ...</span>
      </div>
    </footer>
  );
}
```

---

## **Phase 6: Update Page Files (Day 3)**

### **6.1 Update Home Page**
```jsx
// app/[locale]/page.jsx
import HomePage from '../../components/HomePage';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
```

### **6.2 Update About Page**
```jsx
// app/[locale]/about/page.jsx
import AboutPage from '../../../components/AboutPage';
import Navbar from '../../../components/common/Navbar';
import Footer from '../../../components/common/Footer';
import AutoBreadcrumb from '../../../components/common/AutoBreadcrumb';

export default function About() {
  return (
    <>
      <Navbar />
      <AutoBreadcrumb />
      <AboutPage />
      <Footer />
    </>
  );
}
```

### **6.3 Update Products Page**
```jsx
// app/[locale]/products/page.jsx
import ProductsPage from '../../../components/ProductsPage';
import Navbar from '../../../components/common/Navbar';
import Footer from '../../../components/common/Footer';
import AutoBreadcrumb from '../../../components/common/AutoBreadcrumb';

export default function Products() {
  return (
    <>
      <Navbar />
      <AutoBreadcrumb />
      <ProductsPage />
      <Footer />
    </>
  );
}
```

### **6.4 Update Contact Page**
```jsx
// app/[locale]/contact/page.jsx
import ContactPage from '../../../components/ContactPage';
import Navbar from '../../../components/common/Navbar';
import Footer from '../../../components/common/Footer';
import AutoBreadcrumb from '../../../components/common/AutoBreadcrumb';

export default function Contact() {
  return (
    <>
      <Navbar />
      <AutoBreadcrumb />
      <ContactPage />
      <Footer />
    </>
  );
}
```

---

## **Phase 7: SEO & Metadata (Day 3-4)**

### **7.1 Add Metadata to Pages**
```jsx
// app/[locale]/page.jsx
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
    alternates: {
      languages: {
        'en': '/en',
        'id': '/id',
      },
    },
  };
}
```

### **7.2 Add Hreflang Tags**
```jsx
// Add to each page's metadata
alternates: {
  languages: {
    'en': '/en/products',
    'id': '/id/products',
  },
},
```

---

## **Phase 8: Testing & Polish (Day 4)**

### **8.1 Test Language Switching**
- [ ] Test language switcher in navbar
- [ ] Test URL structure (/en/, /id/)
- [ ] Test language persistence
- [ ] Test fallback to default language

### **8.2 Test SEO**
- [ ] Check hreflang tags
- [ ] Test meta descriptions
- [ ] Verify URL structure
- [ ] Check sitemap generation

### **8.3 Performance Testing**
- [ ] Check bundle size
- [ ] Test loading times
- [ ] Verify caching

---

## **URL Structure After Implementation**

```
/en/                    (English Home)
/en/about              (English About)
/en/products            (English Products)
/en/contact             (English Contact)

/id/                    (Indonesian Home - default)
/id/about               (Indonesian About)
/id/products            (Indonesian Products)
/id/contact             (Indonesian Contact)

/                       (Redirects to /id/)
```

---

## **Key Features Implemented**

✅ **URL-based language switching** (/en/, /id/)
✅ **Language switcher in navbar**
✅ **Persistent language preference**
✅ **SEO-friendly with hreflang tags**
✅ **Automatic fallback to Indonesian**
✅ **Translation files for all content**
✅ **Component-level translations**

---

## **Future Enhancements**

- [ ] Add Chinese (zh) support
- [ ] CMS integration for content management
- [ ] Advanced date/number formatting
- [ ] RTL support if needed
- [ ] Language-specific images/content

---

## **Notes**

- Default language: Indonesian (id)
- URL structure: /[locale]/[page]
- Translation files: JSON format
- Framework: next-intl
- SEO: Full support with hreflang
- Performance: Optimized with Next.js 