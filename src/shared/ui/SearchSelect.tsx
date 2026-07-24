import React, { useState, useRef, useEffect, useId, type KeyboardEvent } from 'react';

export interface Option {
  label: string;
  value: string;
}

export interface SearchSelectProps {
  label: string;
  options: Option[];
  value: string; // The currently selected value
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  icon?: string;
  mandatory?: boolean;
}

const SearchSelect: React.FC<SearchSelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  error,
  icon,
  mandatory,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const inputId = useId();
  const listboxId = `${inputId}-listbox`;
  const errorId = `${inputId}-error`;

  // Find the label of the currently selected value to display when closed
  const selectedOption = options.find((opt) => opt.value === value);
  const displayValue = isOpen ? searchTerm : selectedOption?.label || '';

  // Filter options based on the search term
  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredOptions[highlightedIndex]) {
          handleSelect(filteredOptions[highlightedIndex].value);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setSearchTerm('');
        break;
    }
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <label htmlFor={inputId} className="block text-sm font-bold text-foreground mb-2">
        {label} {mandatory && <span className="text-primary">*</span>}
      </label>

      <div 
        className="relative"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-owns={isOpen ? listboxId : undefined}
      >
        {/* Left Icon */}
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted z-10">
            <i className={icon} aria-hidden="true"></i>
          </div>
        )}

        {/* The Input Field */}
        <input
          id={inputId}
          type="text"
          value={displayValue}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setHighlightedIndex(0); 
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls={isOpen ? listboxId : undefined}
          aria-activedescendant={isOpen && filteredOptions[highlightedIndex] ? `${listboxId}-option-${highlightedIndex}` : undefined}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`w-full rounded-2xl border bg-mainBg py-3.5 pr-10 text-foreground transition-all duration-300 outline-none focus:ring-2 focus:ring-primary/20 cursor-text ${
            icon ? 'pl-11' : 'pl-4'
          } ${
            error ? 'border-danger focus:border-danger' : 'border-border focus:border-primary'
          }`}
        />

        {/* Dropdown Chevron Icon */}
        <div 
          className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-muted"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true"></i>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p id={errorId} aria-live="polite" className="mt-2 text-xs font-bold text-danger flex items-center gap-1">
          <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {error}
        </p>
      )}

      {/* The Dropdown List */}
      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute z-50 w-full mt-2 max-h-60 overflow-y-auto rounded-2xl bg-surface border border-border shadow-lg py-2 animate-fade-in"
        >
          {filteredOptions.length === 0 ? (
            <li className="px-4 py-3 text-sm text-muted text-center font-bold">
              No options found
            </li>
          ) : (
            filteredOptions.map((option, index) => (
              <li
                key={option.value}
                id={`${listboxId}-option-${index}`}
                role="option"
                aria-selected={value === option.value}
                onClick={() => handleSelect(option.value)}
                onMouseEnter={() => setHighlightedIndex(index)}
                // Adjusted background color logic here
                className={`px-4 py-3 text-sm cursor-pointer transition-colors flex items-center justify-between ${
                  highlightedIndex === index ? 'bg-sub-header text-foreground' : 'text-foreground bg-surface'
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Dynamic Bullet Indicator */}
                  <span 
                    className={`h-2 w-2 rounded-full transition-colors duration-200 flex-shrink-0 ${
                      highlightedIndex === index ? 'bg-primary' : 'bg-muted/40'
                    }`}
                    aria-hidden="true"
                  ></span>
                  <span className="font-bold">{option.label}</span>
                </div>
                
                {/* Active Checkmark */}
                {value === option.value && (
                  <i className="fa-solid fa-check text-primary" aria-hidden="true"></i>
                )}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchSelect;