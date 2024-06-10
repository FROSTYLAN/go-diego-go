import * as React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

function OreAccess() {
  return (
    <Breadcrumb separator='-'>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Shovel dimensions 9yd3</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Ore-body geometry</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Ramp Volume</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Ramp Drilling</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default OreAccess;
