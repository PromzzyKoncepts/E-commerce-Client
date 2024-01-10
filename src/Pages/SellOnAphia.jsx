import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const BenefitsPage = () => {
  return (
    <>
        <div className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-6">Unlock Your Potential with Aphia Marketplace</h1>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Aphia for Your Store?</h2>
            <p className="text-lg mb-4">
            At Aphia, we're committed to providing a platform that empowers
            sellers to succeed. Here are some compelling reasons to start your
            store with us:
            </p>

            <ul className="list-disc ml-6">
            <li className="mb-2">
                <strong>Global Exposure:</strong> Reach customers around the world
                and expand your market beyond geographical boundaries.
            </li>
            <li className="mb-2">
                <strong>Easy Setup:</strong> Hassle-free store setup, so you can
                focus on what you do best - creating and selling.
            </li>
            <li className="mb-2">
                <strong>Secure Transactions:</strong> Our secure payment system
                ensures smooth and safe transactions for both you and your
                customers.
            </li>
            <li className="mb-2">
                <strong>Community Support:</strong> Join a vibrant community of
                sellers, share insights, and grow together.
            </li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How Aphia Boosts Your Business</h2>
            <p className="text-lg mb-4">
            Aphia is more than just a marketplace; it's a platform designed to
            elevate your business. Here's how:
            </p>

            <ul className="list-disc ml-6">
            <li className="mb-2">
                <strong>Marketing Tools:</strong> Leverage built-in marketing tools
                to promote your products effectively.
            </li>
            <li className="mb-2">
                <strong>Customization:</strong> Personalize your store with a
                profile picture, banner, and a compelling store description.
            </li>
            <li className="mb-2">
                <strong>Customer Engagement:</strong> Communicate directly with your
                customers through our messaging system.
            </li>
            <li className="mb-2">
                <strong>Analytics:</strong> Track your store's performance with
                comprehensive analytics and make informed business decisions.
            </li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-semibold mb-4">Ready to Begin?</h2>
            <p className="text-lg mb-4">
            Join Aphia today and embark on a journey of growth, success, and
            endless possibilities. Click{' '}
            <Link className="text-white bg-amber-500 no-underline p-1 rounded" to= "/auth">
                here
            </Link>
            to create your store now!
            </p>
        </section>
        </div>
        <Footer />
    </>
  );
};

export default BenefitsPage;
