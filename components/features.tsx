export function FeatureGridItem(props: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg rounded-2xl border border-[#1a3652] bg-background p-2">
      <div className="flex h-[250px] flex-col rounded-md p-6 gap-4">
      {props.icon}
      <div className="space-y-2">
        <h3 className="font-bold text-[#1a3652]">{props.title}</h3>
        <p className="text-sm text-[#1a3652]">{props.description}</p>
      </div>
      </div>
    </div>
  );
}

export function FeatureGrid(props: {
  title: string;
  subtitle: string;
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}) {
  return (
    <section
      id="features"
      className="container space-y-6 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
        {props.items.map((item, index) => (
          <FeatureGridItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
