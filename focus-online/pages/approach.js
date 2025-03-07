import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurApproachPage() {
  const [activeTab, setActiveTab] = useState(0);
  const processRef = useRef(null);
  const toolsRef = useRef(null);
  const meetingsRef = useRef(null);
  
  // GSAP animations
  useEffect(() => {
    // Process steps animation
    const processSections = document.querySelectorAll('.process-step');
    processSections.forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        delay: index * 0.2
      });
    });

    // Tools section animation
    gsap.from(toolsRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: toolsRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Meetings section animation
    gsap.from(meetingsRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: meetingsRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  // Our approach process data
  const processSteps = [
    {
      title: "Discovery & Research",
      description: "We begin with a comprehensive discovery phase, immersing ourselves in your property's unique character, target audience, and competitive landscape. Through detailed digital audits and stakeholder interviews, we uncover insights that inform our strategic approach, ensuring every recommendation is tailored to your specific needs and market positioning.",
      icon: "/static/images/icons/discovery.svg"
    },
    {
      title: "Strategic Planning",
      description: "Based on research findings, we develop a comprehensive strategic roadmap outlining immediate opportunities and long-term initiatives. Our data-driven approach prioritizes actions that will create the most significant impact on your revenue, with clear timelines, deliverables, and key performance indicators to measure success.",
      icon: "/static/images/icons/strategy.svg"
    },
    {
      title: "Foundation Building",
      description: "Before driving new traffic, we ensure your digital foundation is robust. This means optimizing your website's performance, implementing proper tracking systems, and ensuring your property is presented at its absolute best online. We believe in building sustainable digital assets that deliver value for years to come.",
      icon: "/static/images/icons/foundation.svg"
    },
    {
      title: "Implementation & Growth",
      description: "With a solid foundation in place, we execute our strategic roadmap, implementing solutions with meticulous attention to detail. Whether creating a new website, launching digital campaigns, or developing content, our team works collaboratively to ensure every element aligns with your property's luxury positioning and revenue goals.",
      icon: "/static/images/icons/implementation.svg"
    },
    {
      title: "Optimization & Evolution",
      description: "Digital success requires continuous refinement. Through regular performance analysis, we identify opportunities for optimization, making data-driven adjustments to maximize results. Our approach evolves with emerging trends and technologies, ensuring your property maintains a competitive edge in the luxury hospitality market.",
      icon: "/static/images/icons/optimization.svg"
    }
  ];

  // Our project management tools data
  const projectTools = [
    {
      name: "Asana",
      description: "Central project management platform where we track all tasks, timelines, and deliverables. Clients receive access to their dedicated project board for complete transparency throughout our collaboration.",
      icon: "project-management.png"
    },
    {
      name: "Slack",
      description: "Dedicated communication channels for real-time collaboration between your team and ours, ensuring swift responses and clear documentation of all project communications.",
      icon: "communication.png"
    },
    {
      name: "Google Workspace",
      description: "Collaborative document creation and sharing, allowing seamless feedback and version control throughout the project lifecycle.",
      icon: "collaboration.png"
    },
    {
      name: "Loom",
      description: "Video messaging tools for clear explanations of complex concepts, website walkthroughs, and training sessions that can be referenced at your convenience.",
      icon: "video-messaging.png"
    },
    {
      name: "Google Analytics & Data Studio",
      description: "Comprehensive performance monitoring and custom reporting dashboards providing clear visibility into key metrics and ROI.",
      icon: "analytics.png"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Approach | Luxury African Properties</title>
        <meta name="description" content="Discover our proven 5-step methodology for elevating luxury African properties online and driving direct bookings." />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Approach</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              A proven methodology for elevating luxury African properties online, built on strategic thinking, meticulous execution, and continuous optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl text-center text-gray-700 leading-relaxed mb-10">
            Since 2012, we've refined our process to deliver exceptional results for luxury African properties. Our methodology combines strategic insight with meticulous execution, ensuring every project drives sustainable growth in direct bookings and revenue.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-colors text-lg">
                Start Your Journey
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Our 5-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that delivers predictable results, refined through years of experience with luxury African properties.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-amber-600 flex items-center justify-center text-white text-3xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Management Tools Section */}
      <section ref={toolsRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Project Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading tools to ensure clear communication, efficient execution, and complete transparency throughout our collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projectTools.map((tool, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{tool.name}</h3>
                <p className="text-gray-600">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Structure Section */}
      <section ref={meetingsRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Collaboration Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured meeting cadence ensures regular communication, progress updates, and strategic alignment throughout our partnership.
            </p>
          </div>

          {/* Tabs Component */}
          <div className="mb-16 max-w-5xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-col md:flex-row justify-center mb-12">
              <button
                onClick={() => setActiveTab(0)}
                className={`py-4 px-8 text-lg font-semibold transition-colors duration-300 mx-2 mb-2 md:mb-0 ${
                  activeTab === 0
                    ? 'bg-amber-600 text-white rounded-lg shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 rounded-lg'
                }`}
              >
                Website Development
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className={`py-4 px-8 text-lg font-semibold transition-colors duration-300 mx-2 mb-2 md:mb-0 ${
                  activeTab === 1
                    ? 'bg-amber-600 text-white rounded-lg shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 rounded-lg'
                }`}
              >
                Ongoing Marketing
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              {/* Website Development Tab */}
              {activeTab === 0 && (
                <div>
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Website Development Collaboration</h3>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-semibold text-amber-700 mb-3">Project Kickoff</h4>
                        <p className="text-gray-600 mb-4">
                          An in-depth discovery session to align on goals, requirements, and creative direction. We'll establish project timelines, deliverables, and communication protocols.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-amber-700 mb-3">Weekly Progress Meetings</h4>
                        <p className="text-gray-600 mb-4">
                          Regular check-ins throughout the design and development process to review progress, gather feedback, and ensure alignment with your vision and goals.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-amber-700 mb-3">Design Presentations</h4>
                        <p className="text-gray-600 mb-4">
                          Structured presentations of design concepts and iterations, allowing for collaborative feedback and refinement before moving to development.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-amber-700 mb-3">Development Milestones</h4>
                        <p className="text-gray-600 mb-4">
                          Regular reviews of key development milestones, providing opportunities to test functionality and ensure the technical implementation matches your expectations.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-amber-700 mb-3">Training & Handover</h4>
                        <p className="text-gray-600 mb-4">
                          Comprehensive training sessions on your new website's content management system, ensuring your team is equipped to maintain and update the site effectively.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-amber-700 mb-3">Post-Launch Review</h4>
                        <p className="text-gray-600 mb-4">
                          A thorough review of the launched website, addressing any final adjustments and establishing performance benchmarks for ongoing optimization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Ongoing Marketing Tab */}
              {activeTab === 1 && (
                <div>
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Ongoing Marketing Collaboration</h3>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-semibold text-amber-700 mb-3">Monthly Strategy Heartbeats</h4>
                        <p className="text-gray-600 mb-4">
                          Monthly strategic sessions to review performance metrics, discuss market trends, and align on priorities for the coming month. These meetings ensure your marketing efforts remain agile and responsive to changing conditions.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-amber-700 mb-3">Quarterly Performance Reviews</h4>
                        <p className="text-gray-600 mb-4">
                          In-depth quarterly assessments of all marketing initiatives, analyzing performance against KPIs and identifying strategic opportunities for the upcoming quarter. These sessions often include recommendations for budget allocation and campaign refinements.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-amber-700 mb-3">Weekly Task Updates</h4>
                        <p className="text-gray-600 mb-4">
                          Regular updates through Asana on task progress, upcoming deliverables, and any action items requiring your input, ensuring continuous momentum and clear communication between meetings.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-amber-700 mb-3">Campaign Launch Briefings</h4>
                        <p className="text-gray-600 mb-4">
                          Dedicated sessions before each major campaign launch to review creative assets, targeting strategies, and expected outcomes, ensuring alignment before deployment.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-amber-700 mb-3">Annual Strategy Planning</h4>
                        <p className="text-gray-600 mb-4">
                          Comprehensive annual planning workshops to establish marketing objectives, budget allocation, and campaign calendar for the upcoming year, aligned with your property's business goals and market positioning.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-amber-700 mb-3">On-Demand Consultations</h4>
                        <p className="text-gray-600 mb-4">
                          Flexible access to our team for ad-hoc strategic consultations, emergency situations, or time-sensitive opportunities that arise between regular meetings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Property's Digital Presence?</h2>
            <p className="text-xl text-amber-100 mb-8">
              Let's discuss how our approach can be tailored to your property's unique needs and goals.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-white hover:bg-gray-100 text-amber-600 rounded-md font-bold transition-colors text-lg shadow-md">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  // This would typically fetch any dynamic data from your API or CMS
  // For demonstration, we're using static data
  
  return {
    props: {},
    // Re-generate the page at most once per day
    revalidate: 86400,
  };
}