'use client'

import heroImg from '@/images/TempLP.svg'
import Logo1 from '@/images/Logo1.jpg'
import Logo2 from '@/images/Logo2.jpg'
import Logo3 from '@/images/Logo3.png'
import Logo4 from '@/images/Logo4.jpg'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Leaf, ThumbsUp, Clock, Sprout, Facebook, Twitter, Instagram, Linkedin, ChevronLeft, ChevronRight, Star, Mountain, Droplets, Scissors, Trees } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function LandingPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Green Thumb Landscaping transformed our backyard into a beautiful oasis. Their attention to detail and professionalism were outstanding!",
      rating: 5,
    },
    {
      name: "Mike Thompson",
      role: "Business Owner",
      content: "We hired Green Thumb for our office landscaping, and the results were beyond our expectations. Our employees love the new outdoor space!",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Gardening Enthusiast",
      content: "The team at Green Thumb Landscaping are true experts. They provided valuable advice and created a low-maintenance garden that blooms all year round.",
      rating: 4,
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer);
  }, [])

  return (
    (<div className="flex flex-col min-h-screen ">
      <header className="px-4 lg:px-6 h-16 flex items-center container mx-auto">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-md ml-3 tracking-tighter hidden md:block uppercase font-bold">Green Thumb Landscaping</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-md font-medium hover:underline underline-offset-4"
            href="#">
            Services
          </Link>
          <Link
            className="text-md font-medium hover:underline underline-offset-4"
            href="#">
            About
          </Link>
          <Link
            className="text-md font-medium hover:underline underline-offset-4"
            href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full container mx-auto  py-12 md:py-24 lg:py-32 xl:py-28">
          <div className="container px-4 md:px-6">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Outdoor Space
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Professional landscaping services to create the garden of your dreams. From design to maintenance,
                    we've got you covered.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button>Get a Free Quote</Button>
                  <Button variant="outline">Our Services</Button>
                </div>
              </div>
              <Image
                alt="Landscaping"
                className="mx-auto  my-6 md:my-0 object-cover object-center sm:w-[60%] lg:order-last"
                height="250"
                src={heroImg}
                width="250" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="hover:shadow-md transition hover:scale-[1.03] cursor-default flex flex-col items-center text-center">
                <CardContent className=" flex flex-col items-center p-6">
                  <Scissors className="h-12 w-12 text-center text-green-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Lawn Care</h3>
                  <p className="text-sm text-gray-500">
                    Regular mowing, fertilization, and weed control to keep your lawn lush and healthy.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition hover:scale-[1.03] cursor-default flex flex-col items-center text-center">
                <CardContent className=" flex flex-col items-center p-6">
                  <Trees className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Tree & Shrub Care</h3>
                  <p className="text-sm text-gray-500">
                    Pruning, shaping, and maintenance to ensure the health and beauty of your trees and shrubs.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition hover:scale-[1.03] cursor-default flex flex-col items-center text-center">
                <CardContent className=" flex flex-col items-center p-6">
                  <Droplets className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Irrigation Systems</h3>
                  <p className="text-sm text-gray-500">
                    Design and installation of efficient watering systems to keep your landscape hydrated.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition hover:scale-[1.03] cursor-default flex flex-col items-center text-center">
                <CardContent className=" flex flex-col items-center p-6">
                  <Mountain className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Hardscaping</h3>
                  <p className="text-sm text-gray-500">
                    Creation of patios, walkways, and retaining walls to enhance your outdoor living space.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg">View All Services</Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 container mx-auto lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl mb-8">Why Our Landscaping Services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center hover:border-green-600 hover:border-2 transition duration-300 text-center hover:bg-green-50 p-6">
                <CardContent className="flex flex-col items-center space-y-4">
                  <ThumbsUp className="h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-bold">Expert Design</h3>
                  <p className="text-gray-500">
                    Our team of skilled designers create beautiful, functional outdoor spaces tailored to your needs.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 hover:border-green-600 hover:border-2 transition duration-300 hover:bg-green-50">
                <CardContent className="flex flex-col items-center space-y-4">
                  <Clock className="h-12 w-12 text-green-500 " />
                  <h3 className="text-xl font-bold">Timely Execution</h3>
                  <p className="text-gray-500">
                    We value your time and ensure projects are completed efficiently without compromising quality.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 hover:border-green-600 hover:border-2 transition duration-300 hover:bg-green-50">
                <CardContent className="flex flex-col items-center space-y-4 ">
                  <Sprout className="h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-bold">Sustainable Practices</h3>
                  <p className="text-gray-500">
                    Our eco-friendly approach ensures your landscape thrives while minimizing environmental impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full  py-12 bg-black container mx-auto rounded-lg mb-6 text-white">
          <div className="container  px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">500+</h3>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">50+</h3>
                <p className="text-sm text-gray-400">Expert Team Members</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">98%</h3>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">20+</h3>
                <p className="text-sm text-gray-400">Years of Experience</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32   bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Clients Say</h2>
            <div className="relative">
              <div className="flex items-center justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-0 z-10"
                  onClick={prevTestimonial}>
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Card className="hover:shadow-md transition hover:scale-[1.03] cursor-default max-w-2xl mx-auto">
                  <CardContent className=" flex flex-col items-center p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="flex mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-lg italic">"{testimonials[currentTestimonial].content}"</p>
                      <div>
                        <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                        <p className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-0 z-10"
                  onClick={nextTestimonial}>
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">FAQ's</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>What services do you offer?</AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of landscaping services including landscape design, garden installation, lawn care, tree and shrub pruning, hardscaping, irrigation systems, and seasonal maintenance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How often should I water my new plants?</AccordionTrigger>
                <AccordionContent>
                  Watering frequency depends on the type of plants, soil conditions, and weather. Generally, new plants need more frequent watering until established. We provide detailed care instructions for each project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer eco-friendly landscaping options?</AccordionTrigger>
                <AccordionContent>
                  Yes, we specialize in sustainable landscaping practices. This includes using native plants, implementing water-saving irrigation systems, and utilizing organic fertilizers and pest control methods.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How long does a typical landscaping project take?</AccordionTrigger>
                <AccordionContent>
                  Project duration varies depending on the scope and complexity. Small projects might take a few days, while larger renovations could take several weeks. We provide a detailed timeline during the consultation process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer maintenance services after installation?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer ongoing maintenance services to keep your landscape looking its best. This includes regular lawn care, pruning, fertilization, and seasonal clean-ups.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What is hardscaping and do you provide these services?</AccordionTrigger>
                <AccordionContent>
                  Hardscaping refers to the non-living elements in landscaping, such as patios, walkways, retaining walls, and water features. Yes, we offer comprehensive hardscaping services to complement our softscaping work.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>How do I get an estimate for my project?</AccordionTrigger>
                <AccordionContent>
                  You can request an estimate by contacting us through our website, phone, or email. We'll schedule a consultation to visit your property, discuss your needs, and provide a detailed proposal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Are your services covered by any warranty?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer warranties on our workmanship and many of the plants we install. The specific terms of the warranty depend on the type of service or product. We'll provide detailed warranty information in our service agreement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-8 container mx-auto ">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center sm:text-5xl">Our Partners</h2>

          <div className=" px-4 bg-black  rounded-xl md:px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-[80px]">
              <Image
                src={Logo1}
                alt="Client Logo 1"
                width={180}
                height={80}
                className="object-cover " />
              <Image
                src={Logo2}
                alt="Client Logo 2"
                width={180}
                height={80}
                className="object-cover " />
              <Image
                src={Logo3}
                alt="Client Logo 3"
                width={180}
                height={80}
                className="object-cover " />
              <Image
                src={Logo4}
                alt="Client Logo 4"
                width={180}
                height={80}
                className="object-cover " />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Your Free Quote Today</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Ready to transform your outdoor space? Fill out the form, and we'll get back to you with a
                    personalized quote for your landscaping project.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center">
                    <ThumbsUp className="mr-2 h-5 w-5 text-green-500" />
                    <span>Expert landscape design</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="mr-2 h-5 w-5 text-green-500" />
                    <span>Quality materials and plants</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="mr-2 h-5 w-5 text-green-500" />
                    <span>Professional installation</span>
                  </li>
                  <li className="flex items-center">
                    <ThumbsUp className="mr-2 h-5 w-5 text-green-500" />
                    <span>Ongoing maintenance services</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <form className="w-full max-w-md space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="john@example.com" required type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="(123) 456-7890" required type="tel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project-type">Project type</Label>
                    <select
                      id="project-type"
                      className="w-full rounded-md border border-gray-300  px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      required>
                      <option value="">Select a project type</option>
                      <option value="landscape-design">Landscape Design</option>
                      <option value="garden-installation">Garden Installation</option>
                      <option value="lawn-care">Lawn Care</option>
                      <option value="hardscaping">Hardscaping</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      className="min-h-[100px]"
                      id="message"
                      placeholder="Tell us about your project..."
                      required />
                  </div>
                  <Button className="w-full" type="submit">
                    Get Your Free Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full  py-9 bg-gray-900 text-white ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col space-y-4">
              <Link href="#" className="flex items-center">
                <Leaf className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-lg font-bold">Green Thumb Landscaping</span>
              </Link>
              <p className="text-sm text-gray-400">Transforming outdoor spaces since 2000</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:underline">Home</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Services</Link></li>
                <li><Link href="#" className="text-sm hover:underline">About Us</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-sm">123 Garden Street, Green City, 12345</li>
                <li className="text-sm">Phone: (123) 456-7890</li>
                <li className="text-sm">Email: info@greenthumb.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-400">© 2023 Green Thumb Landscaping. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>)
  );
}