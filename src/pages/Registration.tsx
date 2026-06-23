import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Check, CreditCard, Users, FileText, Coffee, Wifi,
  CheckCircle2, AlertTriangle, ExternalLink, FileCheck,
  ShieldCheck, Upload, Copyright, ClipboardList, Mail,
  CalendarClock, ArrowRight, Sparkles
} from 'lucide-react';

const Registration = () => {
  const benefits = [
    {
      icon: FileText,
      title: "IEEE Xplore Publication",
      description: "Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements."
    },
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with leading researchers and industry experts from around the world"
    },
    {
      icon: Coffee,
      title: "Social Events",
      description: "Welcome reception, gala dinner, and networking breaks throughout the conference"
    },
    {
      icon: Wifi,
      title: "Digital Access",
      description: "Access to presentation slides, conference app, and digital proceedings"
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Prepare Your Camera-Ready Manuscript",
      icon: FileCheck,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconBg: "bg-blue-100 dark:bg-blue-900/50",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            The authors will have to submit a camera-ready version as per the guidelines given on the conference website <strong>on or before <s>15th June 2026</s> 22nd June 2026</strong>.
          </p>
          <div className="flex items-start gap-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-1">Important</p>
              <p className="text-amber-700 dark:text-amber-400">
                Please ensure that plagiarism of your manuscript is <strong>less than 20%</strong> (checked via standard plagiarism software such as Turnitin) before submitting the camera-ready paper to confirm inclusion in IEEE Xplore. Papers with plagiarism above 20% will <strong>not</strong> be forwarded for publication.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
              <span>
                The camera-ready paper must strictly follow the IEEE template:{' '}
                <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline underline-offset-2 inline-flex items-center gap-1 font-medium hover:text-blue-800">
                  IEEE Templates <ExternalLink className="h-3 w-3" />
                </a>
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
              <span>The number of pages in the Final Camera-ready Paper must be within <strong>4–6 pages</strong>. The maximum number of pages per manuscript allowed is Six (6). Papers not meeting these requirements will not be considered for IEEE Xplore.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
              <span>IEEE template doesn't mean only double column and 6 pages. There are various specific parameters such as line spacing, font size, tables and figures formatting, and reference formatting to be looked into.</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: "Author Registration & Copyright Clearance",
      icon: ShieldCheck,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0" />
              <span>At least one author must register with <strong>Full Author Registration</strong> and present the paper at STESI 2026 for it to be considered for IEEE Xplore publication.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0" />
              <span>Each registration is valid for <strong>one participant only</strong>.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0" />
              <span>Co-authors who wish to attend and receive certificates must register separately under the appropriate category.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1 shrink-0" />
              <span>
                The final manuscript must include the copyright clearance code notice at the bottom of the first page. Use the LaTeX/Word template here:{' '}
                <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline underline-offset-2 inline-flex items-center gap-1 font-medium hover:text-emerald-800">
                  IEEE Templates <ExternalLink className="h-3 w-3" />
                </a>
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <Copyright className="h-4 w-4 text-emerald-600" />
              Copyright Notice Placement
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Replace the dummy code in the template with the official IEEE copyright code provided by the organizers. This code must appear at the bottom left of the first page of your paper.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Copyright details are included below for your reference. If the conference chooses to stamp the papers, this will be in addition to the markings provided by the IEEE Publishing Operations team:
            </p>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-3 border-l-4 border-emerald-400">
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">US Government authors:</p>
                <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">U.S. Government work is not protected by U.S. copyright</code>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-3 border-l-4 border-emerald-400">
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">Crown government (UK, Canada, Australia):</p>
                <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">979-8-3315-6316-5/26/$31.00 ©2026 IEEE Crown</code>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-3 border-l-4 border-emerald-400">
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">European Union authors:</p>
                <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">979-8-3315-6316-5/26/$31.00 ©2026 IEEE European Union</code>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-3 border-l-4 border-emerald-400">
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">All other papers:</p>
                <code className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">979-8-3315-6316-5/26/$31.00 ©2026 IEEE</code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "Preparing Camera-Ready Submission via IEEE PDF eXpress",
      icon: Upload,
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-50 dark:bg-violet-950/30",
      borderColor: "border-violet-200 dark:border-violet-800",
      iconBg: "bg-violet-100 dark:bg-violet-900/50",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <p className="font-semibold text-gray-800 dark:text-gray-200">Before creating your PDF:</p>
          <div className="space-y-2 ml-1">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-violet-500 mt-1 shrink-0" />
              <span>Add the copyright notice to the bottom of the first page.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-violet-500 mt-1 shrink-0" />
              <span>Proofread your source document thoroughly.</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Creating your IEEE PDF eXpress Account:</h4>
            <ol className="space-y-2 list-decimal list-inside text-sm text-gray-700 dark:text-gray-300">
              <li>Visit the <a href="https://ieee-pdf-express.org/" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 underline underline-offset-2 font-medium hover:text-violet-800">IEEE PDF eXpress™ site <ExternalLink className="h-3 w-3 inline" /></a></li>
              <li>First-time users select the <strong>"New Users"</strong> link and enter:
                <div className="bg-violet-50 dark:bg-violet-950/40 rounded-md p-3 mt-2 ml-4 space-y-1 border border-violet-200 dark:border-violet-800">
                  <p><strong>Conference ID:</strong> <code className="bg-violet-200 dark:bg-violet-800 px-2 py-0.5 rounded text-violet-900 dark:text-violet-200 font-bold">70017X</code> (Kindly add X)</p>
                  <p><strong>Your Email Address</strong></p>
                  <p><strong>A Password</strong></p>
                </div>
              </li>
              <li>Continue following the on-screen prompts.</li>
              <li>You'll receive online and email confirmation after setup.</li>
              <li>After <em>"File has been converted successfully"</em>, download the PDF from the <strong>"Action"</strong> Tab in the Dashboard.</li>
              <li>Download the PDF file of your paper from PDF eXpressPlus website and upload it via the CMT Portal for Camera Ready Paper Submission of STESI-2026 at{' '}
                <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FSTESI2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm px-3 py-1 rounded-md shadow-sm hover:shadow transition-all duration-200">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Microsoft CMT Portal — STESI 2026
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ol>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
              Previous users can reuse their existing password but must verify contact details.
            </p>
          </div>
        </div>
      )
    },
    {
      number: 4,
      title: "Procedure for IEEE Copyright Form (eCF) Submission",
      icon: ClipboardList,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      borderColor: "border-orange-200 dark:border-orange-800",
      iconBg: "bg-orange-100 dark:bg-orange-900/50",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <p>To publish in IEEE Xplore, it is <strong>mandatory</strong> to transfer the copyright to IEEE.</p>

          <div className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Process:</h4>
            <ol className="space-y-2 list-decimal list-inside text-sm text-gray-700 dark:text-gray-300">
              <li>Log in to your <strong>CMT Submission Portal</strong>.</li>
              <li>Click the <strong>IEEE Copyright</strong> link.</li>
              <li>You'll be redirected to the <strong>IEEE eCF portal</strong>.</li>
              <li>Follow steps 1–5 to complete the transfer.</li>
              <li>Download the completed Copyright Form (.pdf).</li>
              <li>Upload it back to your CMT account under the corresponding paper.</li>
            </ol>
          </div>

          <div className="flex items-start gap-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-1">Important Note</p>
              <p className="text-amber-700 dark:text-amber-400">
                A separate copyright transfer is required for <strong>each paper</strong>.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 5,
      title: "Registration",
      icon: CreditCard,
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50 dark:bg-rose-950/30",
      borderColor: "border-rose-200 dark:border-rose-800",
      iconBg: "bg-rose-100 dark:bg-rose-900/50",
      content: (
        <div className="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-rose-500 mt-1 shrink-0" />
            <span>At least <strong>one author must register</strong>.</span>
          </div>

          <div>
            <a href="https://formbuilder.ccavenue.com/live/ccavenue/manipal-university-jaipur-2/stesi-2026" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-rose-300 dark:hover:border-rose-700 transition-colors group">
              <div className="bg-rose-100 dark:bg-rose-900/50 p-2 rounded-lg group-hover:bg-rose-200 dark:group-hover:bg-rose-800/50 transition-colors">
                <CreditCard className="h-4 w-4 text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Payment Link</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">CCAvenue Portal</p>
              </div>
            </a>
          </div>

          <div className="flex items-center gap-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-lg p-4">
            <CalendarClock className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0" />
            <span className="font-semibold text-rose-800 dark:text-rose-300">
              Deadline: <s className="opacity-60 font-medium">15th June 2026</s> June 22, 2026
            </span>
          </div>

          <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/40 dark:to-pink-950/40 border-2 border-rose-300 dark:border-rose-700 rounded-xl p-4 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-start gap-3">
              <div className="bg-rose-500 rounded-full p-1.5 mt-0.5 shrink-0">
                <AlertTriangle className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-rose-800 dark:text-rose-200 text-base">Finalize your registration using the Google Form</p>
                <p className="text-rose-600 dark:text-rose-400 text-xs mt-0.5">After paying the registration fee, please finalize your registration by filling out the Google form</p>
              </div>
            </div>
            <a href="https://forms.gle/BwwCcK3jW5G7gBj78" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 shrink-0">
              Registration Form <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-start gap-2">
            <Mail className="h-4 w-4 text-rose-500 mt-1 shrink-0" />
            <span>
              For queries:{' '}
              <a href="mailto:stesi@jaipur.manipal.edu" className="text-rose-600 dark:text-rose-400 underline underline-offset-2 font-medium hover:text-rose-800">
                stesi@jaipur.manipal.edu
              </a>
            </span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Registration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Secure your spot at STESI 2026. Choose from our flexible registration options and join the premier conference on Smart Technologies for Energy, Sustainability & Industry.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-full shadow-lg shadow-red-500/25"
            >
              <Sparkles className="h-6 w-6 animate-pulse" />
              <span className="text-lg sm:text-xl font-bold tracking-wide">Registration Closed!</span>
              <Sparkles className="h-6 w-6 animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Camera Ready Paper Submission Steps */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Camera Ready Paper Submission</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Please ensure the following steps are completed for submitting the camera-ready paper and completing the registration.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-300 via-violet-300 to-rose-300 dark:from-blue-700 dark:via-violet-700 dark:to-rose-700 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className={`${step.bgColor} border ${step.borderColor} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}>
                      {/* Step Header */}
                      <div className={`bg-gradient-to-r ${step.color} px-6 py-4 flex items-center gap-4`}>
                        <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <IconComponent className="h-6 w-6 text-white shrink-0" />
                          <h3 className="text-white font-bold text-lg sm:text-xl">{step.title}</h3>
                        </div>
                      </div>
                      {/* Step Content */}
                      <div className="px-6 py-5">
                        {step.content}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Pricing */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Registration Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the registration category that best fits your profile. IEEE members enjoy discounted rates on all registration categories.
            </p>
          </motion.div>

          <div className="overflow-x-auto bg-white mb-3 rounded-lg shadow-lg border border-gray-200 max-w-5xl mx-auto">
            <Table className="mb-8">
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                  <TableHead className="text-left font-bold text-white text-base py-3 px-4 border-r border-white/20">
                    Participant Category
                  </TableHead>
                  <TableHead className="text-center font-bold text-white text-base py-3 px-3 border-r border-white/20" colSpan={2}>
                    IEEE Member
                  </TableHead>
                  <TableHead className="text-center font-bold text-white text-base py-3 px-3" colSpan={2}>
                    Non IEEE Member
                  </TableHead>
                </TableRow>
                <TableRow className="bg-primary/90 hover:bg-primary/90">
                  <TableHead className="text-left font-semibold text-white py-2 px-4 border-r border-white/20"></TableHead>
                  <TableHead className="text-center font-semibold text-white py-2 px-3 border-r border-white/20">
                    Online
                  </TableHead>
                  <TableHead className="text-center font-semibold text-white py-2 px-3 border-r border-white/20">
                    Offline
                  </TableHead>
                  <TableHead className="text-center font-semibold text-white py-2 px-3 border-r border-white/20">
                    Online
                  </TableHead>
                  <TableHead className="text-center font-semibold text-white py-2 px-3">
                    Offline
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Indian Participants Section */}
                <TableRow className="bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300">
                  <TableCell colSpan={5} className="text-center text-base font-bold text-blue-900 py-3 px-4 border-b-2 border-blue-400">
                    Indian Participants
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-white">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Student
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300">
                    ₹6,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300">
                    ₹8,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3 border-r border-gray-300">
                    ₹8,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3">
                    ₹10,000
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-gray-50">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Academician
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300" colSpan={2}>
                    ₹11,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3 border-r border-gray-300" colSpan={2}>
                    ₹13,000
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-white">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Industry
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300" colSpan={2}>
                    ₹13,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3 border-r border-gray-300" colSpan={2}>
                    ₹15,000
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-gray-50">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Attendee
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-500 text-base py-3 px-3 border-r border-gray-300">
                    -
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300">
                    ₹2,000
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-500 text-base py-3 px-3 border-r border-gray-300">
                    -
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3">
                    ₹5,000
                  </TableCell>
                </TableRow>

                {/* Foreign Participants Section */}
                <TableRow className="bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300">
                  <TableCell colSpan={5} className="text-center text-base font-bold text-green-900 py-3 px-4 border-b-2 border-green-400">
                    Foreign Participants
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-white">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Student
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300">
                    $100
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300">
                    $120
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3 border-r border-gray-300">
                    $120
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3">
                    $150
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-gray-50">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Academician
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300" colSpan={2}>
                    $200
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3 border-r border-gray-300" colSpan={2}>
                    $250
                  </TableCell>
                </TableRow>
                
                <TableRow className="hover:bg-gray-100 border-b border-gray-300 bg-white">
                  <TableCell className="font-semibold text-gray-900 pl-6 py-3 px-4 border-r border-gray-300">
                    Attendee
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-500 text-base py-3 px-3 border-r border-gray-300">
                    -
                  </TableCell>
                  <TableCell className="text-center font-bold text-primary text-base py-3 px-3 border-r border-gray-300">
                    $50
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-500 text-base py-3 px-3 border-r border-gray-300">
                    -
                  </TableCell>
                  <TableCell className="text-center font-bold text-gray-800 text-base py-3 px-3">
                    $100
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-8">
            <div className="bg-card rounded-lg border border-border/50 p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold text-primary">Note</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground flex items-start">
                  <span className="text-primary font-medium mr-2">1.</span>
                  <span>Rates are inclusive of GST 18%</span>
                </p>
                <p className="text-sm text-muted-foreground flex items-start">
                  <span className="text-primary font-medium mr-2">2.</span>
                  <span>One full author offline registration can present up to 2 papers</span>
                </p>
                <p className="text-sm text-muted-foreground flex items-start">
                  <span className="text-primary font-medium mr-2">3.</span>
                  <span>Accommodation is not included in registration and has to be managed by Participant.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">What's Included</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your registration includes access to world-class content, networking opportunities, and professional development resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader className="text-center">
                      <IconComponent className="h-12 w-12 mx-auto text-primary mb-4" />
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Registration;
