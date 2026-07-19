import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

const scheduleFiles = [
  {
    label: 'Program Schedule',
    href: '/program%20schedule_STESI2026.pdf',
    fileName: 'program schedule_STESI2026.pdf',
    opensInNewTab: false,
    className:
      'from-blue-600 via-blue-600 to-indigo-700 hover:from-blue-700 hover:via-blue-600 hover:to-indigo-800',
  },
  {
    label: 'Technical Session Schedule',
    href: '/Detail_Technical%20Session_STESI2026.pdf',
    fileName: 'Detail_Technical Session_STESI2026.pdf',
    opensInNewTab: false,
    className:
      'from-violet-600 via-purple-600 to-blue-700 hover:from-violet-700 hover:via-purple-600 hover:to-blue-800',
  },
  {
    label: 'Keynote and Oral Session Links',
    href: '/Links%20of%20Keynote%20and%20Oral%20sessions.pdf',
    opensInNewTab: true,
    className:
      'from-cyan-600 via-blue-600 to-violet-700 hover:from-cyan-700 hover:via-blue-600 hover:to-violet-800',
  },
];

const ScheduleDownloadsSection = () => {
  return (
    <section className="bg-background/95 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[440px] flex-col gap-4 sm:max-w-xl"
        >
          {scheduleFiles.map((file, index) => (
            <motion.a
              key={file.href}
              href={file.href}
              download={file.opensInNewTab ? undefined : file.fileName}
              target={file.opensInNewTab ? '_blank' : undefined}
              rel={file.opensInNewTab ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true }}
              className={`group flex min-h-16 w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r px-5 py-4 text-center text-base font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-[72px] sm:gap-4 sm:px-8 sm:text-xl ${file.className}`}
            >
              {file.opensInNewTab ? (
                <ExternalLink className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-6 sm:w-6" />
              ) : (
                <Download className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5 sm:h-6 sm:w-6" />
              )}
              <span className="min-w-0 leading-snug">{file.label}</span>
              <span className="shrink-0 rounded-full bg-red-600 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white shadow-[0_0_18px_rgba(220,38,38,0.65)] sm:text-xs">
                New
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleDownloadsSection;
