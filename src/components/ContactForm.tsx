import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import AstedLogoBlack  from "@/assets/AstedLogoBlack.svg";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name can only contain letters, spaces, hyphens, and apostrophes" }),
  
  phone: z.string()
    .trim()
    .min(1, { message: "Phone number is required" })
    .regex(/^\+?[\d\s\-\(\)]+$/, { message: "Please enter a valid phone number" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .optional()
    .or(z.literal("")),
  
  education: z.string()
    .min(1, { message: "Please select your educational qualification" }),
  
  address: z.string()
    .trim()
    .min(1, { message: "Address is required" })
    .max(500, { message: "Address must be less than 500 characters" }),
  
  message: z.string()
    .trim()
    .max(1000, { message: "Message must be less than 1000 characters" })
    .optional()
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Form submitted with validated data:", data);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        variant: "default"
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const educationValue = watch("education");

  return (
    <section id="contact" className="py-6 bg-background">
      <div className="container mx-auto">
        <div className="bg-background border-2 border-primary rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center ">
              <h2 className="font-oswald  md:font-bold text-section-header text-primary">
                GET IN TOUCH
              </h2>
              
              <div className="flex items-center space-x-2">
                <div className=" w-auto h-44 rounded flex items-center justify-center">
                 <img src={AstedLogoBlack} alt="" />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-work-sans font-semibold text-foreground">
                    Name
                  </label>
                  <Input
                    {...register("name")}
                    placeholder="Full Name"
                    className={`bg-brand-light-gray border-0 font-work-sans ${errors.name ? 'ring-2 ring-destructive' : ''}`}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm font-work-sans">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2 md:row-span-3">
                  <label className="font-work-sans font-semibold text-foreground">
                    Message (Optional)
                  </label>
                  <Textarea
                    {...register("message")}
                    placeholder="Write a message"
                    className={`bg-brand-light-gray border-0 font-work-sans min-h-[200px] resize-none ${errors.message ? 'ring-2 ring-destructive' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm font-work-sans">{errors.message.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="font-work-sans font-semibold text-foreground">
                    Phone No.
                  </label>
                  <Input
                    {...register("phone")}
                    placeholder="Phone Number"
                    className={`bg-brand-light-gray border-0 font-work-sans ${errors.phone ? 'ring-2 ring-destructive' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm font-work-sans">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="font-work-sans font-semibold text-foreground">
                    Educational Qualification
                  </label>
                  <Select onValueChange={(value) => setValue("education", value)} value={educationValue}>
                    <SelectTrigger className={`bg-brand-light-gray border-0 font-work-sans ${errors.education ? 'ring-2 ring-destructive' : ''}`}>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.education && (
                    <p className="text-destructive text-sm font-work-sans">{errors.education.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="font-work-sans font-semibold text-foreground">
                    Email (Optional)
                  </label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className={`bg-brand-light-gray border-0 font-work-sans ${errors.email ? 'ring-2 ring-destructive' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm font-work-sans">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="font-work-sans font-semibold text-foreground">
                    Address
                  </label>
                  <Input
                    {...register("address")}
                    placeholder="Address"
                    className={`bg-brand-light-gray border-0 font-work-sans ${errors.address ? 'ring-2 ring-destructive' : ''}`}
                  />
                  {errors.address && (
                    <p className="text-destructive text-sm font-work-sans">{errors.address.message}</p>
                  )}
                </div>
              </div>

              <div className="text-right pt-6">
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="cta" 
                  disabled={isSubmitting}
                  className="min-w-32"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;