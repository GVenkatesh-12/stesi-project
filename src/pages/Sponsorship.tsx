import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Check, X as CloseIcon } from 'lucide-react';

const sponsorshipTiers = [
  { key: 'tier10k', amount: '₹10k', label: 'Supporter' },
  { key: 'tier25k', amount: '₹25k', label: 'Bronze' },
  { key: 'tier50k', amount: '₹50k', label: 'Silver' },
  { key: 'tier75k', amount: '₹75k', label: 'Gold' },
  { key: 'tier100k', amount: '₹1 Lakh', label: 'Platinum' },
  { key: 'tier150k', amount: '₹1.5 Lakh', label: 'Diamond' },
];

type BenefitValue = string | boolean;

const sponsorshipBenefits: {
  label: string;
  description?: string;
  values: Record<string, BenefitValue>;
}[] = [
  {
    label: 'Number of free attendee registrations',
    values: {
      tier10k: '1',
      tier25k: '2',
      tier50k: '3',
      tier75k: '4',
      tier100k: '5',
      tier150k: '6',
    },
  },
  {
    label: 'Invitation to expert talk',
    values: {
      tier10k: false,
      tier25k: false,
      tier50k: false,
      tier75k: false,
      tier100k: true,
      tier150k: true,
    },
  },
  {
    label:
      'Space for logos as provided by the Sponsor at appropriate venues (Website, posters, flyers, banners, printed materials, etc.)',
    values: {
      tier10k: true,
      tier25k: true,
      tier50k: true,
      tier75k: true,
      tier100k: true,
      tier150k: true,
    },
  },
  {
    label: 'Exhibition Booth details',
    values: {
      tier10k: '5 ft x 10 ft',
      tier25k: '10 ft x 10 ft',
      tier50k: '20 ft x 10 ft',
      tier75k: '30 ft x 10 ft',
      tier100k: '30 ft x 10 ft',
      tier150k: '40 ft x 10 ft',
    },
  },
  {
    label: 'Sponsor’s brochure/flyer in the conference kit (to be provided by sponsor)',
    values: {
      tier10k: false,
      tier25k: false,
      tier50k: false,
      tier75k: true,
      tier100k: true,
      tier150k: true,
    },
  },
];

const Sponsorship = () => {
  const renderBenefitValue = (value: BenefitValue) => {
    if (typeof value === 'string') {
      return <span className="font-medium text-foreground whitespace-nowrap">{value}</span>;
    }

    return value ? (
      <Check className="h-5 w-5 mx-auto text-emerald-500" aria-label="Included" />
    ) : (
      <CloseIcon className="h-5 w-5 mx-auto text-destructive" aria-label="Not included" />
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <section className="bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary">Sponsorship Opportunities</h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Partner with STESI 2026 to showcase your organization’s commitment to innovation, sustainability, and
                the future of smart energy systems.
              </p>
              <p className="text-sm text-muted-foreground">
                *All sponsorship amounts are exclusive of applicable taxes.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="p-4 text-left text-sm font-semibold uppercase tracking-wide border border-primary/60">
                      Particulars
                    </th>
                    {sponsorshipTiers.map((tier) => (
                      <th
                        key={tier.key}
                        className="p-4 text-center text-sm font-semibold uppercase tracking-wide border border-primary/60"
                      >
                         <div className="text-base sm:text-lg font-bold whitespace-nowrap">{tier.amount}</div>
                         <div className="text-xs sm:text-sm font-normal text-primary-foreground/90">{tier.label}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sponsorshipBenefits.map((benefit, index) => (
                    <tr
                      key={benefit.label}
                      className={`${index % 2 === 0 ? 'bg-background' : 'bg-muted/40'} border-b border-border`}
                    >
                      <td className="p-4 align-top text-sm sm:text-base text-foreground border border-border">
                        <span className="font-medium">{benefit.label}</span>
                        {benefit.description && (
                          <p className="text-xs text-muted-foreground mt-1">{benefit.description}</p>
                        )}
                      </td>
                      {sponsorshipTiers.map((tier) => (
                        <td key={tier.key} className="p-4 text-center align-middle border border-border">
                          {renderBenefitValue(benefit.values[tier.key])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsorship;

