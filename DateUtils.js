class DateUtils {
	/**
	 *
	 * @param {"asc" | "desc"} direction
	 * @returns `function` sorter
	 */
	/*#__PURE__*/ static dateSorter(direction) {
		throw new Error("DateUtils.dateSorter Not Implemented");
	}

	/**
	 * @param {Date} date
	 * @param {number} value
	 * @param {"day" | "month" | "year"} unit
	 */
	/*#__PURE__*/ static add(date, value, unit) {
		throw new Error("DateUtils.add Not Implemented");
	}

	/**
	 *
	 * @param {Date} date1
	 * @param {Date} date2
	 * @returns `string` difference in descending order
	 *
	 * @example ```js
	 * DateUtils.diff(new Date(2024, 0, 25), new Date(2025, 1, 27))
	 * // "1 year(s), 1 month(s), 2 day(s)"
	 * ```
	 */
	/*#__PURE__*/ static diff(date1, date2) {
		throw new Error("DateUtils.diff Not Implemented");
	}
}

module.exports = DateUtils;
