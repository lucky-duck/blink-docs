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
    title: "Get started",
    description: "Learn how to integrate Blink into your application.",
    link: "/docs/intro",
    Icon: GetStartedIcon,
  },
  {
    title: "Product guides",
    description: "Learn how to use Blink's features.",
    link: "/docs/intro",
    Icon: GetStartedIcon,
  },
  {
    title: "Developer guides",
    description: "Learn how to integrate Blink into your application.",
    link: "/docs/intro",
    Icon: GetStartedIcon,
  },
  {
    title: "API reference",
    description: "Learn how to integrate Blink into your application.",
    link: "/docs/intro",
    Icon: GetStartedIcon,
  },
  {
    title: "Get support",
    description: "Learn how to integrate Blink into your application.",
    link: "/docs/intro",
    Icon: GetStartedIcon,
  },
  {
    title: "GitHub",
    description: "Learn how to integrate Blink into your application.",
    link: "/docs/intro",
    Icon: GetStartedIcon,
  },
];

const productFeatureListItems: FeatureItem[] = [
  {
    title: "Virtual terminal",
    description: "Learn how to integrate Blink into your application.",
    link: "/docs/intro",
    Icon: GetStartedIcon,
  },
  {
    title: "Payment links",
    description: "Learn how to integrate Blink into your application.",
    link: "/docs/intro",
    Icon: GetStartedIcon,
  },
  {
    title: "Payment pages",
    description: "Learn how to integrate Blink into your application.",
    link: "/docs/intro",
    Icon: GetStartedIcon,
  },
  {
    title: "Payment buttons",
    description: "Learn how to integrate Blink into your application.",
    link: "/docs/intro",
    Icon: GetStartedIcon,
  },
  {
    title: "Invoices",
    description: "Learn how to integrate Blink into your application.",
    link: "/docs/intro",
    Icon: GetStartedIcon,
  },
  {
    title: "Subscriptions",
    description: "Learn how to integrate Blink into your application.",
    link: "/docs/intro",
    Icon: GetStartedIcon,
  },
  {
    title: "Connect",
    description: "Learn how to integrate Blink into your application.",
    link: "/docs/intro",
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
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Container>
        <Hero
          title="Blink documentation"
          subtitle="Explore our platform guides and learn how to integrate Blink into your application as a developer."
          ctaText="Get started"
          ctaLink="#"
          cta2Text="Explore all features"
          cta2Link="#"
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
                link: "/docs/intro",
                linkText: "Get support",
                color: "gradientWinter",
              },
              {
                title: "See what's new",
                description: "Learn about the latest Blink updates and changes to the platform..",
                link: "/docs/intro",
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
