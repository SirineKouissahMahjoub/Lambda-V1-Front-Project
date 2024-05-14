import React from 'react';
import CheckboxFilter from '@/components/SideBarFilter/CheckBoxFilter';
import { CompetenceOptions, ExperienceOptions, SecteurOptions, TypeOptions, contractTypeOptions, localisationOptions } from '@/db/FilterOptions';

interface SidebarFilterProps {
  filters: { [key: string]: boolean };
  onCheckboxFilterChange: (filterName: string, filterValue: boolean) => void;
}

const SidebarFilter: React.FC<SidebarFilterProps> = ({ filters, onCheckboxFilterChange }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Filtrer par</h2>
      
      {/* Type(s) Filter */}
      <CheckboxFilter
        filterName="Type(s)"
        filterContent={TypeOptions}
        selectedFilters={filters}
        onFilterChange={onCheckboxFilterChange}
      />

      {/* Type de contrat Filter */}
      <CheckboxFilter
        filterName="Type(s) de contrat"
        filterContent={contractTypeOptions}
        selectedFilters={filters}
        onFilterChange={onCheckboxFilterChange}
      />
    <div className="mt-2 h-80 overflow-y-auto">
      {/* Localisation(s) Filter */}
      <CheckboxFilter
        filterName="Localisation"
        filterContent={localisationOptions}
        selectedFilters={filters}
        onFilterChange={onCheckboxFilterChange}
      /></div>

      {/* Expérience(s) Filter */}
      <CheckboxFilter
        filterName="Expériences"
        filterContent={ExperienceOptions}
        selectedFilters={filters}
        onFilterChange={onCheckboxFilterChange}
      />

      {/* Secteur(s) Filter */}
      <div className="mt-2 h-80 overflow-y-auto">
      <CheckboxFilter
        filterName="Secteur(s)"
        filterContent={SecteurOptions}
        selectedFilters={filters}
        onFilterChange={onCheckboxFilterChange}
      /></div>

      {/* Compétence(s) Filter */}
      <div className="mt-2 h-80 overflow-y-auto">
      <CheckboxFilter
        filterName="Compétence(s)"
        filterContent={CompetenceOptions}
        selectedFilters={filters}
        onFilterChange={onCheckboxFilterChange}
      /></div>
    </div>
  );
};

export default SidebarFilter;
