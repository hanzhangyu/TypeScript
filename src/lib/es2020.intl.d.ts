declare namespace Intl {

    /**
     * [Unicode BCP 47 Locale Identifiers](https://unicode.org/reports/tr35/#Unicode_Language_and_Locale_Identifiers) definition.
     *
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
     */
    type UnicodeBCP47LocaleIdentifier = string;

    /**
     * Unit to use in the relative time internationalized message.
     *
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#Parameters).
     */
    type RelativeTimeFormatUnit =
        | "year"
        | "years"
        | "quarter"
        | "quarters"
        | "month"
        | "months"
        | "week"
        | "weeks"
        | "day"
        | "days"
        | "hour"
        | "hours"
        | "minute"
        | "minutes"
        | "second"
        | "seconds";

    /**
     * The locale matching algorithm to use.
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation).
     */
    type RelativeTimeFormatLocaleMatcher = "lookup" | "best fit";

    /**
     * The format of output message.
     *
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).
     */
    type RelativeTimeFormatNumeric = "always" | "auto";

    /**
     * The length of the internationalized message.
     *
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).
     */
    type RelativeTimeFormatStyle = "long" | "short" | "narrow";

    /**
     * [BCP 47 language tag](http://tools.ietf.org/html/rfc5646) definition.
     *
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
     */
    type BCP47LanguageTag = string;

    /**
     * The locale(s) to use
     *
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
     */
    type LocalesArgument = UnicodeBCP47LocaleIdentifier | UnicodeBCP47LocaleIdentifier[] | Locale | Locale[] | undefined;

    /**
     * An object with some or all of properties of `options` parameter
     * of `Intl.RelativeTimeFormat` constructor.
     *
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).
     */
    interface RelativeTimeFormatOptions {
        /** The locale matching algorithm to use. For information about this option, see [Intl page](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation). */
        localeMatcher?: RelativeTimeFormatLocaleMatcher;
        /** The format of output message. */
        numeric?: RelativeTimeFormatNumeric;
        /** The length of the internationalized message. */
        style?: RelativeTimeFormatStyle;
    }

    /**
     * An object with properties reflecting the locale
     * and formatting options computed during initialization
     * of the `Intl.RelativeTimeFormat` object
     *
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#Description).
     */
    interface ResolvedRelativeTimeFormatOptions {
        locale: UnicodeBCP47LocaleIdentifier;
        style: RelativeTimeFormatStyle;
        numeric: RelativeTimeFormatNumeric;
        numberingSystem: string;
    }

    /**
     * An object representing the relative time format in parts
     * that can be used for custom locale-aware formatting.
     *
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts#Using_formatToParts).
     */
    interface RelativeTimeFormatPart {
        type: string;
        value: string;
        unit?: RelativeTimeFormatUnit;
    }

    interface RelativeTimeFormat {
        /**
         * Formats a value and a unit according to the locale
         * and formatting options of the given
         * [`Intl.RelativeTimeFormat`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat)
         * object.
         *
         * While this method automatically provides the correct plural forms,
         * the grammatical form is otherwise as neutral as possible.
         *
         * It is the caller's responsibility to handle cut-off logic
         * such as deciding between displaying "in 7 days" or "in 1 week".
         * This API does not support relative dates involving compound units.
         * e.g "in 5 days and 4 hours".
         *
         * @param value -  Numeric value to use in the internationalized relative time message
         *
         * @param unit - [Unit](https://tc39.es/ecma402/#sec-singularrelativetimeunit) to use in the relative time internationalized message.
         *
         * @throws `RangeError` if `unit` was given something other than `unit` possible values
         *
         * @returns {string} Internationalized relative time message as string
         *
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format).
         */
        format(value: number, unit: RelativeTimeFormatUnit): string;

        /**
         *  Returns an array of objects representing the relative time format in parts that can be used for custom locale-aware formatting.
         *
         *  @param value - Numeric value to use in the internationalized relative time message
         *
         *  @param unit - [Unit](https://tc39.es/ecma402/#sec-singularrelativetimeunit) to use in the relative time internationalized message.
         *
         *  @throws `RangeError` if `unit` was given something other than `unit` possible values
         *
         *  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts).
         */
        formatToParts(value: number, unit: RelativeTimeFormatUnit): RelativeTimeFormatPart[];

        /**
         * Provides access to the locale and options computed during initialization of this `Intl.RelativeTimeFormat` object.
         *
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions).
         */
        resolvedOptions(): ResolvedRelativeTimeFormatOptions;
    }

    /**
     * The [`Intl.RelativeTimeFormat`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat)
     * object is a constructor for objects that enable language-sensitive relative time formatting.
     *
     * [Compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat#Browser_compatibility).
     */
    const RelativeTimeFormat: {
        /**
         * Creates [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat) objects
         *
         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.
         *  For the general form and interpretation of the locales argument,
         *  see the [`Intl` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).
         *
         * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters)
         *  with some or all of options of `RelativeTimeFormatOptions`.
         *
         * @returns [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat) object.
         *
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat).
         */
        new(
            locales?: UnicodeBCP47LocaleIdentifier | UnicodeBCP47LocaleIdentifier[],
            options?: RelativeTimeFormatOptions,
        ): RelativeTimeFormat;

        /**
         * Returns an array containing those of the provided locales
         * that are supported in date and time formatting
         * without having to fall back to the runtime's default locale.
         *
         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.
         *  For the general form and interpretation of the locales argument,
         *  see the [`Intl` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).
         *
         * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters)
         *  with some or all of options of the formatting.
         *
         * @returns An array containing those of the provided locales
         *  that are supported in date and time formatting
         *  without having to fall back to the runtime's default locale.
         *
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/supportedLocalesOf).
         */
        supportedLocalesOf(
            locales?: UnicodeBCP47LocaleIdentifier | UnicodeBCP47LocaleIdentifier[],
            options?: RelativeTimeFormatOptions,
        ): UnicodeBCP47LocaleIdentifier[];
    };

    interface NumberFormatOptions {
        compactDisplay?: "short" | "long" | undefined;
        notation?: "standard" | "scientific" | "engineering" | "compact" | undefined;
        signDisplay?: "auto" | "never" | "always" | "exceptZero" | undefined;
        unit?: string | undefined;
        unitDisplay?: "short" | "long" | "narrow" | undefined;
        currencyDisplay?: string | undefined;
        currencySign?: string | undefined;
    }

    interface ResolvedNumberFormatOptions {
        compactDisplay?: "short" | "long";
        notation?: "standard" | "scientific" | "engineering" | "compact";
        signDisplay?: "auto" | "never" | "always" | "exceptZero";
        unit?: string;
        unitDisplay?: "short" | "long" | "narrow";
        currencyDisplay?: string;
        currencySign?: string;
    }

    interface DateTimeFormatOptions {
        calendar?: string | undefined;
        dayPeriod?: "narrow" | "short" | "long" | undefined;
        numberingSystem?: string | undefined;

        dateStyle?: "full" | "long" | "medium" | "short" | undefined;
        timeStyle?: "full" | "long" | "medium" | "short" | undefined;
        hourCycle?: "h11" | "h12" | "h23" | "h24" | undefined;
    }

    type LocaleHourCycleKey = "h12" | "h23" | "h11" | "h24";
    type LocaleCollationCaseFirst = "upper" | "lower" | "false";

    interface LocaleOptions {
        /** A string containing the language, and the script and region if available. */
        baseName?: string;
        /** The part of the Locale that indicates the locale's calendar era. */
        calendar?: string;
        /** Flag that defines whether case is taken into account for the locale's collation rules. */
        caseFirst?: LocaleCollationCaseFirst;
        /** The collation type used for sorting */
        collation?: string;
        /** The time keeping format convention used by the locale. */
        hourCycle?: LocaleHourCycleKey;
        /** The primary language subtag associated with the locale. */
        language?: string;
        /** The numeral system used by the locale. */
        numberingSystem?: string;
        /** Flag that defines whether the locale has special collation handling for numeric characters. */
        numeric?: boolean;
        /** The region of the world (usually a country) associated with the locale. Possible values are region codes as defined by ISO 3166-1. */
        region?: string;
        /** The script used for writing the particular language used in the locale. Possible values are script codes as defined by ISO 15924. */
        script?: string;
    }

    interface Locale extends LocaleOptions {
        /** A string containing the language, and the script and region if available. */
        baseName: string;
        /** The primary language subtag associated with the locale. */
        language: string;
        /** Gets the most likely values for the language, script, and region of the locale based on existing values. */
        maximize(): Locale;
        /** Attempts to remove information about the locale that would be added by calling `Locale.maximize()`. */
        minimize(): Locale;
        /** Returns the locale's full locale identifier string. */
        toString(): BCP47LanguageTag;
    }

    /**
     * Constructor creates [Intl.Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)
     * objects
     *
     * @param tag - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646).
     *  For the general form and interpretation of the locales argument,
     *  see the [`Intl` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).
     *
     * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#Parameters) with some or all of options of the locale.
     *
     * @returns [Intl.Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) object.
     *
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale).
     */
    const Locale: {
        new (tag?: BCP47LanguageTag, options?: LocaleOptions): Locale;
    };

     interface DisplayNamesOptions {
        locale: UnicodeBCP47LocaleIdentifier;
        localeMatcher: RelativeTimeFormatLocaleMatcher;
        style: RelativeTimeFormatStyle;
        type: "language" | "region" | "script" | "currency";
        fallback: "code" | "none";
    }

    interface DisplayNames {
        /**
         * Receives a code and returns a string based on the locale and options provided when instantiating
         * [`Intl.DisplayNames()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)
         *
         * @param code The `code` to provide depends on the `type` passed to display name during creation:
         *  - If the type is `"region"`, code should be either an [ISO-3166 two letters region code](https://www.iso.org/iso-3166-country-codes.html),
         *    or a [three digits UN M49 Geographic Regions](https://unstats.un.org/unsd/methodology/m49/).
         *  - If the type is `"script"`, code should be an [ISO-15924 four letters script code](https://unicode.org/iso15924/iso15924-codes.html).
         *  - If the type is `"language"`, code should be a `languageCode` ["-" `scriptCode`] ["-" `regionCode` ] *("-" `variant` )
         *    subsequence of the unicode_language_id grammar in [UTS 35's Unicode Language and Locale Identifiers grammar](https://unicode.org/reports/tr35/#Unicode_language_identifier).
         *    `languageCode` is either a two letters ISO 639-1 language code or a three letters ISO 639-2 language code.
         *  - If the type is `"currency"`, code should be a [3-letter ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html).
         *
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of).
         */
        of(code: string): string | undefined;
        /**
         * Returns a new object with properties reflecting the locale and style formatting options computed during the construction of the current
         * [`Intl/DisplayNames`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames) object.
         *
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions).
         */
        resolvedOptions(): DisplayNamesOptions;
    }

    /**
     * The [`Intl.DisplayNames()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)
     * object enables the consistent translation of language, region and script display names.
     *
     * [Compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames#browser_compatibility).
     */
    const DisplayNames: {
        prototype: DisplayNames;

        /**
         * @param locales A string with a BCP 47 language tag, or an array of such strings.
         *   For the general form and interpretation of the `locales` argument, see the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
         *   page.
         *
         * @param options An object for setting up a display name.
         *
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames).
         */
        new(locales?: BCP47LanguageTag | BCP47LanguageTag[], options?: Partial<DisplayNamesOptions>): DisplayNames;

        /**
         * Returns an array containing those of the provided locales that are supported in display names without having to fall back to the runtime's default locale.
         *
         * @param locales A string with a BCP 47 language tag, or an array of such strings.
         *   For the general form and interpretation of the `locales` argument, see the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)
         *   page.
         *
         * @param options An object with a locale matcher.
         *
         * @returns An array of strings representing a subset of the given locale tags that are supported in display names without having to fall back to the runtime's default locale.
         *
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/supportedLocalesOf).
         */
        supportedLocalesOf(locales: BCP47LanguageTag | BCP47LanguageTag[], options?: {localeMatcher: RelativeTimeFormatLocaleMatcher}): BCP47LanguageTag[];
    };

}
