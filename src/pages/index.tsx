import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import Hero from "@site/src/components/Homepage/Hero";
import FeatureList from "@site/src/components/Homepage/FeatureList";
import GetStartedIcon from "@site/src/components/Svg/GetStartedIcon";
import Container from "@site/src/components/General/Container";
import ProductFeatureList from "../components/Homepage/ProductFeatureList";
import CardWrapper from "../components/Homepage/CardWrapper";

type FeatureItem = {
  title: string;
  description: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
};

const featureListItems: FeatureItem[] = [
  {
    title: "Product guides",
    description:
      "Discover the wide range of features that Blink has to offer and learn how to utilize them effectively.",
    link: "/docs/category/quick-start",
    Icon: GetStartedIcon,
  },
  {
    title: "Developer guides",
    description:
      "Detailed resource material for developers aiming to incorporate Blink into their applications.",
    link: "/docs/developer-guides/introduction",
    Icon: GetStartedIcon,
  },
  {
    title: "API reference",
    description:
      "Access comprehensive API documentation to understand how to better integrate Blink into your workflow.",
    link: "/docs/api-reference/introduction",
    Icon: GetStartedIcon,
  },
  {
    title: "GitHub resources",
    description: "Explore our GitHub to find eCommerce plugins, and our postman collection.",
    link: "https://github.com/Blink-Payment/",
    Icon: GetStartedIcon,
  },
];

const productFeatureListItems: FeatureItem[] = [
  {
    title: "Card payments",
    description: "Understand how to process card payments with our comprehensive guide.",
    link: "/docs/product-guides/ways-to-get-paid/card-payments",
    Icon: GetStartedIcon,
  },
  {
    title: "Open banking",
    description: "Incorporate open banking into your payment systems for more flexibility.",
    link: "/docs/product-guides/ways-to-get-paid/open-banking",
    Icon: GetStartedIcon,
  },
  {
    title: "Direct debits",
    description: "Learn how to set up direct debits for recurring payments.",
    link: "/docs/product-guides/ways-to-get-paid/direct-debits",
    Icon: GetStartedIcon,
  },
  {
    title: "Blink pages",
    description: "Explore how Blink pages can enhance your online presence.",
    link: "/docs/product-guides/ways-to-get-paid/blink-pages",
    Icon: GetStartedIcon,
  },
  {
    title: "Payment links",
    description: "Learn how to create and send payment links to your customers.",
    link: "/docs/product-guides/ways-to-get-paid/payment-links",
    Icon: GetStartedIcon,
  },
  {
    title: "Virtual terminal",
    description: "Dive into the ease of using virtual terminals for card-not-present transactions.",
    link: "/docs/product-guides/ways-to-get-paid/virtual-terminal",
    Icon: GetStartedIcon,
  },
  {
    title: "Batch payments",
    description: "Discover how to implement batch payments for efficient bulk transactions.",
    link: "/docs/product-guides/ways-to-get-paid/batch-payments",
    Icon: GetStartedIcon,
  },
  {
    title: "Reporting",
    description: "Understand how to use our reporting feature for detailed transaction insights.",
    link: "/docs/category/reporting",
    Icon: GetStartedIcon,
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Home`} description="Description will go into a meta tag in <head />">
      <Container>
        <Hero
          title="Blink documentation"
          subtitle="Explore our platform guides and learn how to integrate Blink into your application as a developer."
          ctaText="Get started"
          ctaLink="#"
          cta2Text="Create sandbox account"
          cta2Link="https://www.blinkpayment.co.uk/developer-signup"
        />
        <main>
          <FeatureList features={featureListItems} />
          <ProductFeatureList
            title={"Browse by product feature"}
            features={productFeatureListItems}
          />
          <CardWrapper
            cards={[
              {
                title: "Get technical support",
                description:
                  "Need some help or want to discuss your integration with a technical member of the Blink team.",
                link: "https://www.blinkpayment.co.uk/contact-us",
                linkText: "Get support",
                color: "gradientWinter",
              },
              {
                title: "Create sandbox account",
                description: "Setup your developer sandbox account to start integrating Blink.",
                link: "https://www.blinkpayment.co.uk/developer-signup",
                linkText: "View changelog",
                color: "galaxyDark",
              },
            ]}
          />
        </main>
      </Container>
    </Layout>
  );
}
