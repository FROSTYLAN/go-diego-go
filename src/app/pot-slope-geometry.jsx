import * as React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

function PitSlopeGeometry() {
  return (
    <Breadcrumb separator='-'>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Overall Slope Angle</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Overall slope angle and Interramp slope angles with ramp included</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Overall slope angle with working bench included and Interramp angles associated with the working bench</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Overall slope angle with one working bench and a ramp section and Interramp slope angles for a slope containing a working bench and a ramp</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Final Overall pit slope</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default PitSlopeGeometry;
