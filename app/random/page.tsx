'use client';

import { useState } from 'react';
import Message from './components/partials/message';
import { getCurrentComponent } from './components/utils';
import { useData, useSession } from './hooks';
import { AssignedTeam } from './types';

export default function App() {

  const [currentStateId, transitionToStateFn] = useState(0);

  const { data, isLoading: dataLoading, isError: dataError } = useData();
  const { data: session, isLoading: sessionLoading, isError: sessionError } = useSession();
  const [teams, setTeams] = useState<AssignedTeam[]>([]);
  const [assignedStudents, setAssignedStudents] = useState<number[]>([]);
  const [currentTeamMembers, setCurrentTeamMembers] = useState<AssignedTeam | undefined>();

  if (dataLoading) return <Message content="Loading..." />
  if (dataError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  return getCurrentComponent(
    currentStateId,
    session,
    data,
    teams,
    setTeams,
    assignedStudents,
    setAssignedStudents,
    currentTeamMembers,
    setCurrentTeamMembers,
    transitionToStateFn
  );
}