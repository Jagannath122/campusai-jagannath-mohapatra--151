import React, { useState } from 'react';
import { 
  Calculator, 
  CalendarCheck, 
  Award, 
  Receipt, 
  CheckCircle2, 
  AlertTriangle, 
  Info,
  TrendingUp,
  Percent
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/campusData';

export const UtilitiesSection: React.FC = () => {
  const [activeTool, setActiveTool] = useState<'attendance' | 'cgpa' | 'fees'>('attendance');

  // Attendance Calculator States
  const [totalClasses, setTotalClasses] = useState<number>(48);
  const [attendedClasses, setAttendedClasses] = useState<number>(38);
  const [targetPercentage, setTargetPercentage] = useState<number>(75);

  // CGPA Calculator States
  const [inputCgpa, setInputCgpa] = useState<number>(8.45);
  const [cgpaFormula, setCgpaFormula] = useState<'autonomous' | 'aicte'>('autonomous');

  // SGPA Goal Planner
  const [currentCgpa, setCurrentCgpa] = useState<number>(8.10);
  const [completedSems, setCompletedSems] = useState<number>(4);
  const [targetCgpa, setTargetCgpa] = useState<number>(8.50);

  // Fee Estimator States
  const [branchType, setBranchType] = useState<'cse' | 'core' | 'pg'>('cse');
  const [accommodation, setAccommodation] = useState<'day_scholar' | 'hostel_non_ac' | 'hostel_ac'>('hostel_non_ac');
  const [hasScholarship, setHasScholarship] = useState<boolean>(true);

  // Attendance Math
  const currentAttendance = totalClasses > 0 ? (attendedClasses / totalClasses) * 100 : 0;
  
  // How many classes can safely bunk or must attend
  const calcAttendanceBunk = () => {
    const target = targetPercentage / 100;
    if (currentAttendance >= targetPercentage) {
      // safe bunks: (attended / (total + x)) >= target => x = (attended / target) - total
      const safeBunks = Math.floor(attendedClasses / target - totalClasses);
      return {
        type: 'safe',
        classes: Math.max(0, safeBunks),
        msg: `You can safely miss the next ${Math.max(0, safeBunks)} class${safeBunks === 1 ? '' : 'es'} and still maintain >= ${targetPercentage}%.`
      };
    } else {
      // required consecutive attendance: ((attended + y) / (total + y)) >= target => y = (target * total - attended) / (1 - target)
      const needed = Math.ceil((target * totalClasses - attendedClasses) / (1 - target));
      return {
        type: 'shortage',
        classes: Math.max(0, needed),
        msg: `You must attend the next ${needed} consecutive class${needed === 1 ? '' : 'es'} without missing any to restore ${targetPercentage}%.`
      };
    }
  };

  const attendanceResult = calcAttendanceBunk();

  // CGPA Math
  const calculatedPercentage = cgpaFormula === 'autonomous'
    ? Math.max(0, (inputCgpa - 0.75) * 10)
    : inputCgpa * 9.5;

  const getDivision = (cgpa: number) => {
    if (cgpa >= 8.25) return { label: 'First Class with Distinction (Honours)', color: 'text-emerald-400' };
    if (cgpa >= 6.75) return { label: 'First Class', color: 'text-indigo-400' };
    if (cgpa >= 5.75) return { label: 'Second Class', color: 'text-amber-400' };
    return { label: 'Pass Class', color: 'text-rose-400' };
  };

  // Target SGPA Math: ((currentCgpa * completedSems) + neededSgpa) / (completedSems + 1) = targetCgpa
  const neededSgpa = (targetCgpa * (completedSems + 1)) - (currentCgpa * completedSems);

  // Fee Math
  const tuitionFee = branchType === 'cse' ? 75000 : branchType === 'core' ? 65000 : 55000;
  const hostelFee = accommodation === 'day_scholar' ? 0 : accommodation === 'hostel_non_ac' ? 38000 : 52000;
  const examFee = 2500;
  const scholarshipDiscount = hasScholarship ? tuitionFee * 0.25 : 0;
  const totalPayable = tuitionFee - scholarshipDiscount + hostelFee + examFee;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title */}
      <div className="pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <Calculator className="w-4 h-4 text-indigo-400" />
          <span>Interactive Academic & Financial Computational Tools</span>
        </div>
        <h2 className="text-2xl font-bold font-display text-white mt-1">
          Student Utilities & Regulation Calculators
        </h2>
        <p className="text-slate-400 text-sm mt-0.5">
          Evaluate attendance safety margins according to the 75% rule, convert CGPA to official percentage, and estimate semester dues.
        </p>
      </div>

      {/* Tool Selector Tabs */}
      <div className="mt-6 flex flex-wrap gap-2 border-b border-slate-800/80 pb-4">
        <button
          onClick={() => setActiveTool('attendance')}
          className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
            activeTool === 'attendance'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <CalendarCheck className="w-4 h-4" />
          <span>75% Attendance & Bunk Planner</span>
        </button>

        <button
          onClick={() => setActiveTool('cgpa')}
          className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
            activeTool === 'cgpa'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>CGPA & SGPA Percentage Converter</span>
        </button>

        <button
          onClick={() => setActiveTool('fees')}
          className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
            activeTool === 'fees'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <Receipt className="w-4 h-4" />
          <span>Semester Fee & Scholarship Estimator</span>
        </button>
      </div>

      {/* TOOL 1: ATTENDANCE & BUNK PLANNER */}
      {activeTool === 'attendance' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <CalendarCheck className="w-5 h-5 text-indigo-400" />
              <span>Attendance Input Parameters</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              As per Academic Regulation Handbook §4.2, students require minimum 75% attendance for end-semester admit cards.
            </p>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Total Classes Conducted So Far: <span className="text-white font-mono">{totalClasses}</span>
                </label>
                <input
                  type="range"
                  min={10}
                  max={120}
                  value={totalClasses}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setTotalClasses(val);
                    if (attendedClasses > val) setAttendedClasses(val);
                  }}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Classes Attended: <span className="text-white font-mono">{attendedClasses}</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={totalClasses}
                  value={attendedClasses}
                  onChange={(e) => setAttendedClasses(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Target Attendance Threshold
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTargetPercentage(75)}
                    className={`py-2 px-3 rounded-lg font-medium text-xs border ${
                      targetPercentage === 75
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    75% (Mandatory Minimum)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTargetPercentage(80)}
                    className={`py-2 px-3 rounded-lg font-medium text-xs border ${
                      targetPercentage === 80
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    80% (Safe Buffer for Placements)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-4">
              Real-Time Attendance Audit
            </h3>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Current Percentage</div>
                <div className={`text-3xl font-display font-extrabold mt-1 ${
                  currentAttendance >= targetPercentage ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {currentAttendance.toFixed(2)}%
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-slate-400">Status</div>
                <div className="mt-1">
                  {currentAttendance >= targetPercentage ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Eligible
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      Shortage Warning
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Strategy / Recommendation Box */}
            <div className={`mt-4 p-4 rounded-xl border text-xs leading-relaxed ${
              attendanceResult.type === 'safe'
                ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-200'
                : 'bg-rose-950/20 border-rose-800/40 text-rose-200'
            }`}>
              <div className="font-semibold text-sm mb-1 flex items-center gap-2">
                {attendanceResult.type === 'safe' ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Safe Attendance Status</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    <span>Attendance Shortage Alert</span>
                  </>
                )}
              </div>
              <p>{attendanceResult.msg}</p>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-slate-950/60 border border-slate-800/60 text-[11px] text-slate-400 space-y-1">
              <div>• Minimum 75% required for issuance of Semester Hall Ticket.</div>
              <div>• Medical relaxation (up to 65%) requires verified doctor certificates submitted within 7 days.</div>
            </div>
          </div>
        </div>
      )}

      {/* TOOL 2: CGPA & PERCENTAGE CONVERTER */}
      {activeTool === 'cgpa' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              <span>CGPA to Percentage Conversion</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Convert your Cumulative Grade Point Average into verified equivalent marks for job drives and higher studies.
            </p>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Enter Your CGPA (10-Point Scale): <span className="text-indigo-400 font-bold font-mono text-sm">{inputCgpa.toFixed(2)}</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  value={inputCgpa}
                  onChange={(e) => setInputCgpa(Math.min(10, Math.max(0, Number(e.target.value))))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white font-mono focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Select Institutional Formula
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setCgpaFormula('autonomous')}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      cgpaFormula === 'autonomous'
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="font-semibold text-xs text-indigo-300">Autonomous Scale</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">% = (CGPA - 0.75) × 10</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCgpaFormula('aicte')}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      cgpaFormula === 'aicte'
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="font-semibold text-xs text-sky-300">AICTE Direct Scale</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">% = CGPA × 9.5</div>
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Equivalent Percentage:</span>
                  <span className="text-2xl font-bold font-display text-white">
                    {calculatedPercentage.toFixed(2)}%
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-800/80">
                  <span className="text-slate-400">Academic Division:</span>
                  <span className={`font-semibold ${getDivision(inputCgpa).color}`}>
                    {getDivision(inputCgpa).label}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SGPA Next Semester Target Planner */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-400" />
              <span>Next Semester SGPA Target Planner</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Calculate what SGPA you need in the upcoming semester to reach your target cumulative CGPA.
            </p>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Current CGPA
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    value={currentCgpa}
                    onChange={(e) => setCurrentCgpa(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Completed Semesters
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="7"
                    value={completedSems}
                    onChange={(e) => setCompletedSems(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Goal / Target Cumulative CGPA
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  value={targetCgpa}
                  onChange={(e) => setTargetCgpa(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-slate-400">Required SGPA in Sem {completedSems + 1}:</div>
                <div className={`text-3xl font-display font-extrabold mt-1 ${
                  neededSgpa <= 10 && neededSgpa >= 0 ? 'text-indigo-400' : 'text-rose-400'
                }`}>
                  {neededSgpa > 10 ? 'Impossible (> 10.0)' : neededSgpa < 0 ? 'Target Already Reached' : neededSgpa.toFixed(2)}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {neededSgpa <= 10 && neededSgpa >= 0
                    ? `Securing an SGPA of ${neededSgpa.toFixed(2)} in Sem ${completedSems + 1} will elevate your cumulative score to ${targetCgpa.toFixed(2)}.`
                    : 'Adjust your target to a mathematically achievable range for a single semester.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOOL 3: FEE & SCHOLARSHIP ESTIMATOR */}
      {activeTool === 'fees' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Receipt className="w-5 h-5 text-indigo-400" />
              <span>Semester Dues Configuration</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Estimate your semester tuition, boarding, examination, and scholarship fee waiver breakdown.
            </p>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">
                  Academic Branch
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setBranchType('cse')}
                    className={`p-2.5 rounded-xl border text-center font-medium ${
                      branchType === 'cse' ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    B.Tech CSE / IT
                  </button>
                  <button
                    type="button"
                    onClick={() => setBranchType('core')}
                    className={`p-2.5 rounded-xl border text-center font-medium ${
                      branchType === 'core' ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    B.Tech Core (ECE/ME)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBranchType('pg')}
                    className={`p-2.5 rounded-xl border text-center font-medium ${
                      branchType === 'pg' ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    M.Tech / MCA
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">
                  Residential / Boarding Plan
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setAccommodation('day_scholar')}
                    className={`p-2.5 rounded-xl border text-center font-medium ${
                      accommodation === 'day_scholar' ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Day Scholar (₹0)
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccommodation('hostel_non_ac')}
                    className={`p-2.5 rounded-xl border text-center font-medium ${
                      accommodation === 'hostel_non_ac' ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Hostel Non-AC (₹38k)
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccommodation('hostel_ac')}
                    className={`p-2.5 rounded-xl border text-center font-medium ${
                      accommodation === 'hostel_ac' ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    Hostel AC (₹52k)
                  </button>
                </div>
              </div>

              {/* Scholarship Toggle */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">Merit Scholarship (SGPA &ge; 9.00)</div>
                  <div className="text-[11px] text-slate-400">Entitles student to a 25% waiver on tuition fees.</div>
                </div>
                <input
                  type="checkbox"
                  checked={hasScholarship}
                  onChange={(e) => setHasScholarship(e.target.checked)}
                  className="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Itemized Fee Invoice */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-4">
              Itemized Fee Invoice
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                <span>Tuition Fee (Per Semester)</span>
                <span className="font-mono font-medium text-white">₹{tuitionFee.toLocaleString()}</span>
              </div>

              {hasScholarship && (
                <div className="flex justify-between py-1.5 border-b border-slate-800 text-emerald-400">
                  <span>Merit Scholarship Discount (-25%)</span>
                  <span className="font-mono font-medium">- ₹{scholarshipDiscount.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                <span>Hostel & 4-Meal Mess Fee</span>
                <span className="font-mono font-medium text-white">₹{hostelFee.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                <span>Examination & Lab Facilities</span>
                <span className="font-mono font-medium text-white">₹{examFee.toLocaleString()}</span>
              </div>

              <div className="flex justify-between pt-3 text-sm font-bold text-white">
                <span>Total Net Payable</span>
                <span className="font-mono text-xl text-indigo-400">₹{totalPayable.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-[11px] text-slate-300">
              <strong className="text-white block mb-1">Payment Instructions:</strong>
              Pay online via <strong>State Bank Collect (SBI Collect)</strong>. Choose "Educational Institutions" &gt; "Campus Fee Account". Enter your Reg No (<span className="text-indigo-300 font-mono">{PROJECT_DETAILS.regNo}</span>) and upload the DU receipt to your ERP student portal.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
