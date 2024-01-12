import { SkillCardProps } from '@/app/lib/definitions';
import { skills } from '@/app/lib/data/skills';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Skills: React.FC = () => {
  return (
    <section className="mt-40" id="services">
      <div className="py-6">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skills.map(e => (
          <SkillCard key={e.title} {...e} />
        ))}
      </div>
    </section>
  );
}

// NewServicesCard component with TypeScript
const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, logos, color }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center'>
          <span
            className={`text-white flex text-xl items-center justify-center h-8 w-8 rounded-full p-2 mr-2 ${color}`}
          >
            {icon}
          </span>
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          {description}
        </p>
      </CardContent>

      <CardFooter>
        <div className="flex flex-wrap gap-3">
          {logos.map((logo, i) => (
            <div key={logo.toString() + i} className="text-3xl flex items-center text-gray-800 dark:text-gray-200">{logo}</div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

export default Skills;
