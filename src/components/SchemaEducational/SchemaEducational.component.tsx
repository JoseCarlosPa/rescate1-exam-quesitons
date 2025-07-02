interface SchemaEducationalProps {
  title: string;
  description: string;
  url: string;
  section: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  timeRequired?: string; // e.g., "PT30M" for 30 minutes
  learningResourceType?: string;
  educationalLevel?: string;
  keywords?: string[];
}

export default function SchemaEducational({
  title,
  description,
  url,
  section,
  difficulty = 'Intermediate',
  timeRequired = 'PT45M',
  learningResourceType = 'Course',
  educationalLevel = 'Technical',
  keywords = []
}: SchemaEducationalProps) {
  
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Course", "LearningResource"],
    "name": title,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "name": "Alumnos Rescate 1",
      "url": "https://rescate1-examenes.web.app"
    },
    "educationalLevel": educationalLevel,
    "learningResourceType": [learningResourceType, "presentation", "assessment", "textbook"],
    "teaches": section,
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "EMT Students"
    },
    "inLanguage": "es-MX",
    "courseMode": "online",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "instructor": {
        "@type": "Organization", 
        "name": "Alumnos Rescate 1"
      }
    },
    "about": {
      "@type": "Thing",
      "name": "Atención Prehospitalaria",
      "description": "Técnico en Urgencias Médicas"
    },
    "educationalCredentialAwarded": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certificate",
      "competencyRequired": section
    },
    "difficulty": difficulty,
    "timeRequired": timeRequired,
    "keywords": keywords.join(', '),
    "isBasedOn": {
      "@type": "Book",
      "name": "AAOS Atención Prehospitalaria Básica",
      "edition": "11ª edición",
      "author": {
        "@type": "Organization",
        "name": "American Academy of Orthopaedic Surgeons"
      }
    },
    "educationalUse": ["instruction", "assessment", "practice"],
    "typicalAgeRange": "18-65",
    "interactivityType": "mixed"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
