import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import AstedLogoBlack from "@/assets/asted-logo.png";
const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState("₹1000");
  const [customAmount, setCustomAmount] = useState("");

  const predefinedAmounts = ["₹800", "₹1000", "₹1500"];

  return (
    <section className="py-6 bg-background">
      <div className="container mx-auto px-6">
        <div className="bg-brand-light-gray border-2 border-primary rounded-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="bg-primary text-primary-foreground p-6 space-y-8">
              <div>
                <div className="flex items-center ">
                  <div className=" w-auto h-44 rounded flex items-center justify-center">
                    <img src={AstedLogoBlack} alt="" className=" w-auto h-24" />
                  </div>
                </div>

                <h2 className="font-oswald  text-[28px] mb-6">
                  Your support can change lives.
                </h2>

                <p className="font-work-sans text-body leading-relaxed opacity-90">
                  At Asted, we believe that every individual deserves the opportunity to live
                  with dignity, access education, and build a sustainable future. Through our
                  initiatives in health, learning, and community development, we strive to bring
                  meaningful change where it's needed the most. But we cannot do it alone—your
                  generosity makes all the difference. Every donation, no matter the size, helps
                  us extend our reach, empower more lives, and create hope for a brighter tomorrow.
                  Together, we can turn compassion into action.
                </p>
              </div>
            </div>

            <div className="bg-background p-6 space-y-8">
              <h3 className="font-oswald font-bold text-section-header text-primary text-center">
                MAKE A MONTHLY DONATION
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-work-sans text-body text-foreground mb-4 text-center">
                    Select Amount:
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`py-3 px-4 font-oswald font-semibold border-2 transition-all ${selectedAmount === amount
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-background text-foreground border-muted hover:border-primary'
                          }`}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>

                  <p className="text-center font-work-sans text-foreground mb-4">OR</p>
                  
                  <div className="flex items-center border-2 border-muted focus-within:border-primary">
                    <span className="px-4 py-3 bg-muted font-oswald font-semibold">₹</span>
                    <Input
                      type="number"
                      placeholder="Enter desired amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount("");
                      }}
                      className="border-0 focus-visible:ring-0 font-work-sans"
                    />
                  </div>
                </div>

                <Button variant="cta" size="cta" className="w-full">
                  DONATE NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;