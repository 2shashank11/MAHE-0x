import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Divider } from "@nextui-org/react";

const statsData = [
  {
    id: "grants",
    title: "Grants",
    current: { year: "FY2025-26", amount: "$150M +" },
    previous: {
      year1: "FY2024-25",
      amount1: "$110M +",
      year2: "FY2023-24",
      amount2: "$92M +",
    },
    partners: [
      ["MAHE", "KMC"],
      ["Schneider", "Volvo Group"],
      ["NVIDIA", "IIT"],
    ],
  },
  {
    id: "awards",
    title: "Awards",
    current: { year: "FY2025-26", amount: "$200M +" },
    previous: {
      year1: "FY2024-25",
      amount1: "$180M +",
      year2: "FY2023-24",
      amount2: "$160M +",
    },
    partners: [
      ["Google", "Microsoft"],
      ["Apple", "Amazon"],
      ["Facebook", "Tesla"],
    ],
  },
  {
    id: "bulletin",
    title: "Bulletin",
    current: { year: "FY2025-26", amount: "$250M +" },
    previous: {
      year1: "FY2024-25",
      amount1: "$220M +",
      year2: "FY2023-24",
      amount2: "$200M +",
    },
    partners: [
      ["Nature", "Science"],
      ["Cell", "PNAS"],
      ["IEEE", "ACM"],
    ],
  },
];

export default function Stats({ id, activeTab, onTabChange }) {
  return (
    <section id={id} className="px-6 mb-8">
      <div className="mx-auto">
        <div className="flex justify-center space-x-24 mb-8">
          {statsData.map((stats) => (
            <button
              key={stats.id}
              onClick={() => onTabChange(stats.id)}
              variant={activeTab === stats.id ? "default" : "outline"}
              className="text-gray-600 hover:text-black hover:font-medium"
            >
              {stats.title}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <AnimatePresence mode="wait">
            {statsData.map(
              (stats) =>
                stats.id === activeTab && (
                  <motion.div
                    key={stats.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 gap-12"
                  >
                    {/* Funding Stats */}
                    <div className="justify-items-start space-y-8">
                      <div>
                        <div className="text-sm text-gray-600">
                          {stats.current.year}
                        </div>
                        <div className="text-left text-4xl font-serif">
                          {stats.current.amount}
                        </div>
                      </div>
                      <Divider />
                      <div className="text-left grid grid-cols-2 gap-10">
                        <div>
                          <div className=" text-sm text-gray-600">
                            {stats.previous.year1}
                          </div>
                          <div className=" text-2xl font-serif">
                            {stats.previous.amount1}
                          </div>
                        </div>
                        <div>
                          <div className=" text-sm text-gray-600">
                            {stats.previous.year2}
                          </div>
                          <div className=" text-2xl font-serif">
                            {stats.previous.amount2}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Partner Logos */}
                    <div className="grid grid-cols-2 gap-8">
                      {stats.partners.map((row, rowIndex) => (
                        <div key={rowIndex} className="space-y-8">
                          {row.map((partner, index) => (
                            <div key={index} className="text-xl">
                              {partner}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
