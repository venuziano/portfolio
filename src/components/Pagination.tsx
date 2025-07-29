/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface PaginationProps {
  items: any[];
  itemsPerPage?: number;
  children: (items: any[]) => React.ReactNode;
  className?: string;
}

export default function Pagination({ 
  items, 
  itemsPerPage = 6, 
  children, 
  className = "" 
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const hasMoreItems = currentPage < totalPages;
  
  const displayedItems = items.slice(0, currentPage * itemsPerPage);
  
  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <div className={className}>
      {children(displayedItems)}
      
      {hasMoreItems && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleLoadMore}
            className="
              group
              inline-flex items-center gap-3
              px-8 py-4
              bg-[#10151a] text-white
              border border-[#35373B] rounded-lg
              hover:bg-[#27272A] hover:border-[#0284C5]
              transition-colors duration-300 ease-in-out
              shadow-lg hover:shadow-xl hover:shadow-[#3bb0ff]/20
              cursor-pointer
            "
          >
            <span className="font-semibold text-lg">More projects</span>
            <ChevronDown 
              size={20} 
              className="
                transition-colors duration-300 ease-in-out
                group-hover:text-[#0284C5]
              " 
            />
          </button>
        </div>
      )}
    </div>
  );
} 