import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('data');
const required = {
  'sources/source_registry.csv': ['source_id','source_type','organisation','title','published_date','url','accessed_date','notes'],
  'sources/revisions.csv': ['revision_id','dataset','record_id','field','old_value','new_value','reason','source_id','revised_at'],
  'geography/district_status_history.csv': ['record_id','year','state','district','status','classification','source_id','verified','last_updated'],
  'violence/incidents.csv': ['incident_id','date','state','district','location','incident_type','target_type','organisation','security_force','civilian_deaths','security_deaths','maoist_deaths','injured','summary','source_id','verification_status','last_updated'],
  'organisations/leadership.csv': ['person_id','name','alias','organisation','role','start_date','end_date','status','state_or_zone','source_id','verification_status','last_updated'],
  'infrastructure/infrastructure_incidents.csv': ['record_id','date','state','district','infrastructure_type','event_type','asset_name','summary','source_id','verification_status','last_updated'],
  'development/district_development.csv': ['record_id','year','state','district','indicator','value','unit','scheme','source_id','verification_status','last_updated'],
  'government_response/surrenders.csv': ['record_id','date_or_year','state','district','count','category','scheme','source_id','verification_status','last_updated']
};

let failed = false;
for (const [rel, columns] of Object.entries(required)) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) { console.error(`Missing: ${rel}`); failed = true; continue; }
  const first = fs.readFileSync(file, 'utf8').split(/\r?\n/)[0].split(',');
  const missing = columns.filter(c => !first.includes(c));
  if (missing.length) { console.error(`${rel}: missing columns ${missing.join(', ')}`); failed = true; }
}
if (failed) process.exit(1);
console.log('Data schema validation passed.');
