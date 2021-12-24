export interface dentalClinic {
  name: string;
  stateName: string;
  availability: availability;
}

export interface vetClinic {
  clinicName: string;
  stateCode: string;
  opening: availability;
}

interface availability {
  from: string;
  to: string;
}
