import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ClientCarousel = ({ clients }) => {
  // State for the 6 displayed clients
  const [displayedClients, setDisplayedClients] = useState([]);
  const [fadeStates, setFadeStates] = useState([]);
  
  // Number of visible clients
  const visibleClientsCount = 6;

  // Initialize with random clients
  useEffect(() => {
    if (clients.length > 0) {
      // Shuffle and take first 6 clients (or fewer if less than 6 available)
      const shuffled = [...clients].sort(() => 0.5 - Math.random());
      const initial = shuffled.slice(0, visibleClientsCount);
      
      // If we have fewer than 6 clients, duplicate some to fill the slots
      const filledClients = [...initial];
      while (filledClients.length < visibleClientsCount) {
        filledClients.push(initial[filledClients.length % initial.length]);
      }
      
      setDisplayedClients(filledClients);
      setFadeStates(new Array(visibleClientsCount).fill(1));
    }
  }, [clients]);

  useEffect(() => {
    // Only set up the interval if we have clients to display
    if (clients.length === 0) return;
    
    // Occasionally replace a random logo
    const interval = setInterval(() => {
      // ~20% chance to keep it subtle and occasional
      if (Math.random() > 0.8) {
        // Choose a random position to replace
        const randomIndex = Math.floor(Math.random() * visibleClientsCount);
        
        // Start fade out
        setFadeStates(prevFadeStates => {
          const newFadeStates = [...prevFadeStates];
          newFadeStates[randomIndex] = 0; // Fade out
          return newFadeStates;
        });

        // After fade out completes, replace the logo and fade in
        setTimeout(() => {
          setDisplayedClients(prevClients => {
            // Get client that's not currently displayed if possible
            const currentNames = prevClients.map(c => c.name);
            const availableClients = clients.filter(client => !currentNames.includes(client.name));
            
            // If all clients are already displayed or no other options, just pick a random one
            const replacementPool = availableClients.length > 0 ? availableClients : clients;
            const replacementClient = replacementPool[Math.floor(Math.random() * replacementPool.length)];
            
            // Create new array with the replacement
            const newClients = [...prevClients];
            newClients[randomIndex] = replacementClient;
            return newClients;
          });
          
          // Fade in the new logo
          setTimeout(() => {
            setFadeStates(prevFadeStates => {
              const newFadeStates = [...prevFadeStates];
              newFadeStates[randomIndex] = 1; // Fade in
              return newFadeStates;
            });
          }, 100);
        }, 500); // Match this with the CSS transition duration
      }
    }, 5000); // Check every 5 seconds
    
    return () => clearInterval(interval); // Clean up on component unmount
  }, [clients, displayedClients]);

  return (
    <div className="bg-storm-dark py-12">
        <h2 className="text-3xl text-center font-semibold text-white mb-4">
            You're in good company
          </h2>
          <p className="text-center text-white mb-12">
            We've had the pleasure of working with some amazing clients over the years. Here are just a few of them.
          </p>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {displayedClients.map((client, index) => (
            <div key={`${client.name}-${index}`} className="h-24 flex items-center justify-center p-4">
              <div 
                className="transition-opacity duration-500 ease-in-out" 
                style={{ opacity: fadeStates[index] }}
              >
                <Image 
                  src={client.logo.url || `/static/images/clients/${client.logo}`} 
                  alt={client.name} 
                  width={150} 
                  height={80} 
                  className="max-h-full w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel;