import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';

const articles = [
  {
    id: 'monsoon',
    title: 'Monsoon Health Tips for Your Family',
    category: 'Seasonal',
    date: 'June 2025',
    image: '/assets/generated/health-tip-delivery.dim_600x400.png',
    summary:
      'The monsoon season brings rain and relief — but also health risks. Learn how to protect your family from common monsoon illnesses like diarrhea, malaria, and skin infections.',
    fullContent: `The monsoon season in Nepal brings much-needed rain, but it also brings health challenges. Here are simple steps to keep your family safe:

**Drink Clean Water:** Always boil water before drinking during monsoon. Waterborne diseases like typhoid and cholera spread easily through contaminated water.

**Prevent Mosquito Bites:** Use mosquito nets at night and keep your surroundings clean. Standing water breeds mosquitoes that carry malaria and dengue.

**Wash Hands Regularly:** Wash hands with soap before eating and after using the toilet. This simple habit prevents many illnesses.

**Eat Fresh Food:** Avoid eating food that has been sitting out for long. Cook fresh meals and store food properly.

**Watch for Symptoms:** If anyone in your family has fever, diarrhea, or vomiting, visit a doctor or call our pharmacy immediately.

**Keep Medicines Ready:** Stock basic medicines like ORS (Oral Rehydration Salts), paracetamol, and antidiarrheal medicines at home during monsoon.

Remember: Prevention is better than cure. Stay clean, eat well, and stay healthy this monsoon season!`,
  },
  {
    id: 'nutrition',
    title: "Children's Nutrition: Keeping Your Child Healthy",
    category: 'Child Health',
    date: 'May 2025',
    image: '/assets/generated/health-tip-nutrition.dim_600x400.png',
    summary:
      'Good nutrition is the foundation of a healthy child. Discover simple, affordable foods that give your children the vitamins and minerals they need to grow strong and smart.',
    fullContent: `Good nutrition is essential for your child's growth, brain development, and immunity. Here is a simple guide for parents:

**Give a Variety of Foods:** Include grains (rice, wheat), pulses (dal, beans), vegetables, fruits, and dairy in your child's daily diet.

**Iron-Rich Foods:** Children need iron for brain development. Give them green leafy vegetables, beans, and meat regularly. Iron deficiency causes weakness and poor concentration.

**Vitamin A:** Found in orange and yellow vegetables like carrots and pumpkin. Vitamin A protects eyesight and boosts immunity.

**Calcium for Strong Bones:** Milk, yogurt, and green vegetables provide calcium. Make sure your child drinks milk daily.

**Avoid Junk Food:** Chips, biscuits, and sugary drinks have little nutrition. Limit these and offer healthy snacks like fruits and nuts instead.

**Breastfeeding:** For babies under 6 months, breast milk is the best food. It provides all nutrients and protects against infections.

**Signs of Malnutrition:** If your child is very thin, has swollen feet, or seems weak and tired, please visit a health worker or call our pharmacy for advice.

A well-nourished child is a happy, active, and smart child!`,
  },
  {
    id: 'firstaid',
    title: 'Basic First Aid: What Every Family Should Know',
    category: 'First Aid',
    date: 'April 2025',
    image: '/assets/generated/health-tip-firstaid.dim_600x400.png',
    summary:
      'Accidents happen at home and in the fields. Learn basic first aid steps that can save lives and prevent small injuries from becoming serious problems.',
    fullContent: `Knowing basic first aid can save lives. Here are the most important first aid skills for rural families:

**For Cuts and Wounds:**
1. Wash the wound with clean water
2. Apply antiseptic (like Dettol or Savlon)
3. Cover with a clean bandage
4. If bleeding does not stop, press firmly and go to a health center

**For Burns:**
1. Cool the burn with cold running water for 10-15 minutes
2. Do NOT use butter, oil, or toothpaste on burns
3. Cover with a clean cloth
4. For serious burns, go to hospital immediately

**For Snake Bites:**
1. Keep the person calm and still
2. Do NOT cut the wound or suck the venom
3. Remove tight clothing and jewelry
4. Go to hospital IMMEDIATELY — this is a medical emergency

**For Choking:**
1. Encourage the person to cough
2. Give 5 firm back blows between the shoulder blades
3. If still choking, call for help immediately

**For Fever:**
1. Give paracetamol in the correct dose
2. Keep the person cool with a wet cloth on the forehead
3. Give plenty of fluids
4. If fever is very high or lasts more than 3 days, see a doctor

**Keep a First Aid Kit at Home:** Bandages, antiseptic, paracetamol, ORS sachets, and a thermometer are essential. Visit our pharmacy to get a complete first aid kit.`,
  },
  {
    id: 'storage',
    title: 'How to Store Medicines Safely at Home',
    category: 'Medicine Safety',
    date: 'March 2025',
    image: '/assets/generated/health-tip-storage.dim_600x400.png',
    summary:
      'Storing medicines incorrectly can make them less effective or even dangerous. Follow these simple tips to keep your family\'s medicines safe and effective.',
    fullContent: `Proper medicine storage is very important for your family's safety. Here are simple rules to follow:

**Keep Medicines Cool and Dry:**
Store medicines in a cool, dry place away from sunlight and heat. Avoid storing in the bathroom or kitchen where it is hot and humid.

**Keep Away from Children:**
Always store medicines in a high place or locked cabinet where children cannot reach them. Many medicines look like sweets to children.

**Check Expiry Dates:**
Always check the expiry date before taking any medicine. Expired medicines may not work and can sometimes be harmful. Bring expired medicines to our pharmacy for safe disposal.

**Keep in Original Packaging:**
Keep medicines in their original boxes or bottles with the label. This helps you remember the correct dose and instructions.

**Refrigerated Medicines:**
Some medicines like insulin, certain eye drops, and some syrups need to be kept in the refrigerator. Check the label or ask our pharmacist.

**Do Not Share Medicines:**
Never give your medicines to someone else, even if they have the same symptoms. Different people need different doses.

**Dispose Safely:**
Do not throw medicines in the river or burn them. Bring unused or expired medicines to our pharmacy — we will dispose of them safely.

**When in Doubt, Ask Us:**
If you are unsure how to store a medicine, just call or visit our pharmacy. We are always happy to help!`,
  },
];

function ArticleCard({ article }: { article: (typeof articles)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow border border-border">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 md:h-56 object-cover"
      />
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-pharmacy-green-100 text-pharmacy-green-700 text-xs font-heading font-bold px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground text-xs font-body">
            <Calendar className="w-3 h-3" />
            {article.date}
          </span>
        </div>
        <h2 className="font-heading font-bold text-lg md:text-xl text-pharmacy-green-800 mb-3 leading-snug">
          {article.title}
        </h2>
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
          {article.summary}
        </p>

        {expanded && (
          <div className="mb-4 p-4 bg-pharmacy-green-50 rounded-xl border border-pharmacy-green-200 animate-fade-in">
            {article.fullContent.split('\n\n').map((para, i) => {
              if (para.startsWith('**') && para.endsWith('**')) {
                return (
                  <h4 key={i} className="font-heading font-bold text-pharmacy-green-800 text-sm mt-4 mb-1">
                    {para.replace(/\*\*/g, '')}
                  </h4>
                );
              }
              if (para.includes('**')) {
                const parts = para.split(/\*\*(.*?)\*\*/g);
                return (
                  <p key={i} className="text-foreground font-body text-sm leading-relaxed mb-2">
                    {parts.map((part, j) =>
                      j % 2 === 1 ? (
                        <strong key={j} className="text-pharmacy-green-700">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              }
              if (para.match(/^\d\./)) {
                return (
                  <p key={i} className="text-foreground font-body text-sm leading-relaxed mb-1 pl-2">
                    {para}
                  </p>
                );
              }
              return (
                <p key={i} className="text-foreground font-body text-sm leading-relaxed mb-2">
                  {para}
                </p>
              );
            })}
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-pharmacy-green-600 font-heading font-semibold text-sm hover:text-pharmacy-green-700 transition-colors tap-target"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Read More
            </>
          )}
        </button>
      </div>
    </article>
  );
}

export default function HealthTips() {
  return (
    <main className="pb-20 md:pb-0">
      {/* Hero */}
      <section className="bg-pharmacy-green-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <span className="inline-block bg-white/20 text-white text-xs font-heading font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Health Tips
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Simple Health Advice for Your Family
          </h1>
          <p className="text-pharmacy-green-100 text-lg font-body max-w-2xl leading-relaxed">
            Easy-to-understand health tips for common illnesses, seasonal health, and family wellness — written especially for rural families in Nepal.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-pharmacy-green-50">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-5 border border-border shadow-card max-w-2xl mx-auto">
            <p className="text-muted-foreground font-body text-sm text-center leading-relaxed">
              <strong className="text-pharmacy-green-700">Important:</strong> These health tips are for general information only. Always consult a qualified doctor or pharmacist for medical advice specific to your condition.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
