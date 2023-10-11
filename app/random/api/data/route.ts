import { getDatabaseClient } from '@/utils/server';
import { type NextRequest } from 'next/server';
import { makeTeamDistribution } from '../../logic';
import { Team, type Group, type PromptCompany, type PromptIdea, type Session, type Student } from '../../types';

export async function GET(request: NextRequest) {
  const client = getDatabaseClient();
  const { data: students } = await client.from('student').select(`id, name, group (id, name)`) as { data: Student[] };
  const { data: groups } = await client.from('random_group').select(`id, name`) as { data: Group[] };
  const { data: prompt_companies } = await client.from('random_prompt_company').select(`id, name`) as { data: PromptCompany[] };
  const { data: prompt_ideas } = await client.from('random_prompt_idea').select(`id, description`) as { data: PromptIdea[] };
  const { data: session } = await client.from('random_session').select(`id, is_open`).eq('is_open', true) as { data: Session[] };

  const developerCount = students.filter((s) => { return s.group.id === 1 }).length;
  const designerCount = students.filter((s) => { return s.group.id === 2 }).length;
  const distribution = makeTeamDistribution(developerCount, designerCount);

  let teams = [] as Team[];
  if (session) {
    const { data } = await client.from('team').select('*').eq('random_session_id', session.id) as { data: Team[] };
    teams = data;
  }

  const response = { groups, students, teams, distribution, prompt_companies, prompt_ideas, session }
  console.log(response);
  return Response.json(response);
}
