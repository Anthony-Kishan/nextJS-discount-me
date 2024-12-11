import { motion } from 'framer-motion';

interface RestaurantFeaturesProps {
    isVisible: boolean; // This prop will control the visibility of features
}

export function RestaurantFeatures({ isVisible }: RestaurantFeaturesProps) {
    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                height: isVisible ? 'auto' : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
        >
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                    <h3 className="text-lg font-semibold">Hours</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between">
                            <span>Monday - Friday</span>
                            <span>11:00 AM - 10:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Saturday - Sunday</span>
                            <span>10:00 AM - 11:00 PM</span>
                        </li>
                    </ul>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                    <h3 className="text-lg font-semibold">Facilities</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                        <li>✓ Free Wi-Fi</li>
                        <li>✓ Outdoor Seating</li>
                        <li>✓ Private Dining Room</li>
                        <li>✓ Wheelchair Accessible</li>
                    </ul>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                        <li>📞 (305) 123-4567</li>
                        <li>📧 info@villagio.com</li>
                        <li>🌐 www.villagio.com</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}
