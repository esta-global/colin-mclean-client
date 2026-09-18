type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  id: string;
};

export function SectionTitle({ eyebrow, title, description, id }: SectionTitleProps) {
  return (
    <div className="home-section-title">
      <div>
        <p className="eyebrow"><span />{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
