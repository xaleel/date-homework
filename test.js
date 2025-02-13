const DateUtils = require("./DateUtils");

const args = process.argv.slice(2);
let methods = ["dateSorter", "add", "diff"];
if (args[0] === "--method") {
	if (!methods.includes(args[1])) {
		console.error(`Unknown method: ${args[1]}`);
		console.log("Usage: --method [dateSorter|add|diff]");
		process.exit();
	}
	methods = [args[1]];
}

function test(f, m) {
	try {
		f();
		console.log(`[Success] ${m}`);
	} catch (e) {
		console.error(`[Error] ${m}`);
		console.error(`     -> ${e}`);
		console.log("");
	}
}

// DateUtils.dateSorter
if (methods.includes("dateSorter")) {
	test(() => {
		const arr = [new Date(2025, 0, 1), new Date(2026, 0, 1)];
		const sorted = arr.sort(DateUtils.dateSorter("asc"));
		if (
			sorted[0].getFullYear() !== 2025 ||
			sorted[1].getFullYear() !== 2026
		)
			throw new Error(
				`Expected: [${arr[0].toString()},${arr[1].toString()}], got: [${sorted[0].toString()},${sorted[1].toString()}]`
			);
	}, "DateUtils.dateSorter: sorts asc");

	test(() => {
		const arr = [new Date(2025, 0, 1), new Date(2026, 0, 1)];
		const sorted = arr.sort(DateUtils.dateSorter("desc"));
		if (
			sorted[1].getFullYear() !== 2025 ||
			sorted[0].getFullYear() !== 2026
		)
			throw new Error(
				`Expected: [${arr[1].toString()},${arr[0].toString()}], got: [${sorted[0].toString()},${sorted[1].toString()}]`
			);
	}, "DateUtils.dateSorter: sorts desc");
}

// DateUtils.add

if (methods.includes("add")) {
	test(() => {
		const output = DateUtils.add(new Date("2025-01-01"), 1, "day");
		const expected = new Date("2025-01-02");
		if (output.getTime() !== expected.getTime())
			throw new Error(
				`Expected: ${expected.toString()}, got: ${output.toString()}`
			);
	}, "DateUtils.add: adds 1 day");

	test(() => {
		const output = DateUtils.add(new Date("2025-01-01"), 1, "month");
		const expected = new Date("2025-02-01");
		if (output.getTime() !== expected.getTime())
			throw new Error(
				`Expected: ${expected.toString()}, got: ${output.toString()}`
			);
	}, "DateUtils.add: adds 1 month");

	test(() => {
		const output = DateUtils.add(new Date("2025-01-01"), 1, "year");
		const expected = new Date("2026-01-01");
		if (output.getTime() !== expected.getTime())
			throw new Error(
				`Expected: ${expected.toString()}, got: ${output.toString()}`
			);
	}, "DateUtils.add: adds 1 year");

	test(() => {
		const date = new Date();
		const clone = new Date(date);
		DateUtils.add(date, 1, "year");
		if (date.getTime() !== clone.getTime())
			throw new Error(`Function argument was mutated`);
	}, "DateUtils.add: function is pure");

	test(() => {
		const date = new Date();
		const output = DateUtils.add(date, 1, "glorp");
		if (date.getTime() !== output.getTime())
			throw new Error(
				`Expected input not to change with invalid unit argument`
			);
	}, "DateUtils.add: handles invalid unit argument");
}

// DateUtils.diff
if (methods.includes("diff")) {
	test(() => {
		const date1 = new Date(2025, 0, 1);
		const date2 = new Date(2026, 0, 1);
		const output = DateUtils.diff(date1, date2);
		const expected = "1 year(s)";
		if (output !== expected)
			throw new Error(
				`Expected: ${expected.toString()}, got: ${output.toString()}`
			);
	}, "DateUtils.diff 1 year");

	test(() => {
		const date1 = new Date(2025, 0, 1);
		const date2 = new Date(2025, 2, 1);
		const output = DateUtils.diff(date1, date2);
		const expected = "2 month(s)";
		if (output !== expected)
			throw new Error(
				`Expected: ${expected.toString()}, got: ${output.toString()}`
			);
	}, "DateUtils.diff 2 months");

	test(() => {
		const date1 = new Date(2025, 0, 1);
		const date2 = new Date(2025, 3, 4);
		const output = DateUtils.diff(date1, date2);
		const expected = "3 month(s), 3 day(s)";
		if (output !== expected)
			throw new Error(
				`Expected: ${expected.toString()}, got: ${output.toString()}`
			);
	}, "DateUtils.diff 3 months & 3 days");

	test(() => {
		const date1 = new Date(2025, 0, 1, 1, 0, 0);
		const date2 = new Date(2026, 2, 4, 5, 5, 6);
		const output = DateUtils.diff(date1, date2);
		const expected =
			"1 year(s), 2 month(s), 3 day(s), 4 hour(s), 5 minute(s), 6 second(s)";
		if (output !== expected)
			throw new Error(
				`Expected: ${expected.toString()}, got: ${output.toString()}`
			);
	}, "DateUtils.diff all");

	test(() => {
		const date1 = new Date();
		const date2 = new Date(date1);
		const output = DateUtils.diff(date1, date2);
		const expected = "";
		if (output !== expected)
			throw new Error(
				`Expected: ${expected.toString()}, got: ${output.toString()}`
			);
	}, "DateUtils.diff no diff");
}
