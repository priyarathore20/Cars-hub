"use client";
import { SearchManuFacturerProps } from "@/types";
import React from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManuFacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image src="/car-logo.svg" width={20} height={20} alt="car-logo" />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            displayValue={(item: string) => item}
            // onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder="Volkswagen..."
          />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
