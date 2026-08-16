{ Filmora configuration unit }
unit FilmoraConfig;

interface

const
  APP_NAME = 'Filmora';
  APP_CHANNEL = 'github-pages';
  APP_KEYWORD = 'filmora';

type
  TAppPaths = record
    DataDir: string;
    LogFile: string;
  end;

function DefaultPaths: TAppPaths;

implementation

function DefaultPaths: TAppPaths;
begin
  Result.DataDir := 'data';
  Result.LogFile := 'data/agent.log';
end;

end.
