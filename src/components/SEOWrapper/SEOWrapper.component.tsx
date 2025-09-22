import {ReactNode} from 'react';
import {useSEO} from '../../hooks/useSEO.hook';
import SchemaEducational from '../SchemaEducational/SchemaEducational.component';

interface SEOWrapperProps {
    children: ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
    section?: string;
    difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
    timeRequired?: string;
    educationalLevel?: string;
    image?: string;
    noindex?: boolean;
    nofollow?: boolean;
    includeEducationalSchema?: boolean;
}

export default function SEOWrapper({
                                       children,
                                       title,
                                       description,
                                       keywords,
                                       section,
                                       difficulty = 'Intermediate',
                                       timeRequired = 'PT45M',
                                       educationalLevel = 'Technical',
                                       image,
                                       noindex = false,
                                       nofollow = false,
                                       includeEducationalSchema = true
                                   }: SEOWrapperProps) {

    // Usar el hook de SEO
    useSEO({
        dynamicTitle: title,
        dynamicDescription: description,
        dynamicKeywords: keywords,
        image,
        noindex,
        nofollow,
        type: 'article',
        section
    });

    return (
        <>
            {/* Schema.org para contenido educacional */}
            {includeEducationalSchema && title && description && section && (
                <SchemaEducational
                    title={title}
                    description={description}
                    url={window.location.href}
                    section={section}
                    difficulty={difficulty}
                    timeRequired={timeRequired}
                    educationalLevel={educationalLevel}
                    keywords={keywords ? keywords.split(', ') : []}
                />
            )}

            {/* Contenido de la página */}
            {children}
        </>
    );
}
